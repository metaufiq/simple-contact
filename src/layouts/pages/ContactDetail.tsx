import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import CustomTextInput from "../atoms/CustomTextInput";

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}
const ContactDetail = (props: mainProps) => {

    return (
        <View style={styles.mainContainer}>
            <CustomTextInput
                title="First Name"
            />
            <CustomTextInput
                title="Last Name"
            />
            <CustomTextInput
                title="Age"
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
    }
})

export default ContactDetail