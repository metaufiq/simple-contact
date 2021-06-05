import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react'
import CustomTextInput from "../atoms/CustomTextInput";
import ContactType from "../../config/types/domain/ContactType";
import Avatar from "../atoms/Avatar";

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<Record<any, { contact?: ContactType }>, any>;
}
const ContactDetail = (props: mainProps) => {

    const contact = props.route.params?.contact;
    const [photo, setPhoto] = useState(contact && contact.photo);
    const [firstName, setFirstName] = useState(contact && contact.firstName);
    const [lastName, setLastName] = useState(contact && contact.lastName);
    const [age, setAge] = useState(contact && contact.age.toString());
    return (
        <View style={styles.mainContainer}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
        alignContent: 'center'
    },
    avatarContainer:{
        paddingVertical: 20
    }
})

export default ContactDetail