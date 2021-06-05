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
import { useThunkDispatch } from "../../utils/hooks";
import contactAction from "../../actions/contactAction";
import IconButton from "../atoms/IconButton";
import Icon from 'react-native-vector-icons/EvilIcons';
import LoadingModal from "../molecules/LoadingModal";
import axios from "axios";
interface routeParams { contact?: ContactType, type: 'add' | 'edit' }
interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<Record<any, routeParams>, any>;
}
const ContactDetail = (props: mainProps) => {

    const [loading, setLoading] = useState(false);
    const contact = props.route.params?.contact;
    const [photo, setPhoto] = useState(contact && contact.photo);
    const [firstName, setFirstName] = useState(contact && contact.firstName);
    const [lastName, setLastName] = useState(contact && contact.lastName);
    const [age, setAge] = useState(contact && contact.age.toString());
    const label = props.route.params.type === 'edit' ? 'EDIT CONTACT' : 'ADD CONTACT'
    const dispatch = useThunkDispatch();

    const checkAndReplacePhoto = async ()=>{
        let newPhoto = 'N/A'
        try {
            await axios.get(photo!)
            newPhoto = photo!
        } catch (error) {
            console.log("photo doesn`t exist!");
        }

        return newPhoto
    }
    const onSubmit = async () => {
        try {
            setLoading(true)
            const data: ContactType = {
                age: parseInt(age!),
                firstName: firstName!,
                lastName: lastName!,
                photo: await checkAndReplacePhoto(),
                id: contact?.id
            }
            switch (props.route.params.type) {
                case 'edit':
                    await contactService.edit(data)
                    break;
                case 'add':
                    await contactService.add(data)
                    break;

                default:
                    break;
            }
            await dispatch(contactAction.getList());
            setLoading(false)

            props.navigation.goBack()
        } catch (error) {
            setLoading(false)

            Alert.alert(
                "Oops,There Is Some Error",
                error.message
            );
        }
    }
    const onDelete = async () => {
        try {
            setLoading(true)

            await contactService.remove(contact?.id)
            await dispatch(contactAction.getList());
            props.navigation.goBack()
            setLoading(false)

        } catch (error) {
            setLoading(false)

            Alert.alert(
                "Oops,There Is Some Error",
                error.message
            );
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <LoadingModal visible={loading}></LoadingModal>
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
                <View style={{alignContent:'center',width:'100%'}}>
                    <IconButton
                        size={60}
                        icon={<Icon size={30} name="trash" color="red" ></Icon>}
                        onClick={onDelete} title="Hapus Data?"
                        color="red"/>
                </View>

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