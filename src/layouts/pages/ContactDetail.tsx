import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React from 'react'

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}
const ContactDetail = (props: mainProps)=>{

    return(
        <View style={styles.mainContainer}>
            <Text>Contact Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    }
})

export default ContactDetail