import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react'
import CustomTextInput from "../atoms/CustomTextInput";
import ContactType from "../../config/types/domain/ContactType";
import Avatar from "../atoms/Avatar";
import { ScrollView } from "react-native-gesture-handler";
import BottomButtonCard from "../molecules/BottomButtonCard";
import contactService from "../../services/contactService";

interface routeParams { contact?: ContactType, type: 'add' | 'edit' }
interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<Record<any, routeParams>, any>;
}
const ContactDetail = (props: mainProps) => {

    const contact = props.route.params?.contact;
    const [photo, setPhoto] = useState(contact && contact.photo);
    const [firstName, setFirstName] = useState(contact && contact.firstName);
    const [lastName, setLastName] = useState(contact && contact.lastName);
    const [age, setAge] = useState(contact && contact.age.toString());
    const label = props.route.params.type === 'edit' ? 'EDIT CONTACT' : 'ADD CONTACT'
    
    const onSubmit = async () => {
        try {
            const data: ContactType = {
                age: parseInt(age!),
                firstName: firstName!,
                lastName: lastName!,
                photo: photo!,
                id: contact!.id
            }
            
            const res = props.route.params.type === 'edit' ? await contactService.edit(data) : contactService.add(data);
            
        } catch (error) {
            Alert.alert(
                "Error",
                error
            );
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.avatarContainer}>
                    <Avatar
                        type="url"
                        size={100}
                        value={contact?.photo} />
                </View>
                <CustomTextInput
                    title="Photo (url)"
                    onChangeText={setPhoto}
                    value={photo}
                />
                <CustomTextInput
                    title="First Name"
                    onChangeText={setFirstName}
                    value={firstName}
                />
                <CustomTextInput
                    title="Last Name"
                    onChangeText={setLastName}
                    value={lastName}
                />
                <CustomTextInput
                    title="Age"
                    keyboardType="numeric"
                    onChangeText={setAge}
                    value={age}
                />
            </ScrollView>
            <BottomButtonCard
                    label={label}
                    onClick={onSubmit}
                ></BottomButtonCard>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
        alignContent: 'center'
    },
    avatarContainer: {
        paddingVertical: 20
    }
})

export default ContactDetail