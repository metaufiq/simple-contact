import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { ComponentType } from 'react'
import { Icon } from "react-native-vector-icons/Icon"

interface mainProps {
    data?: any;
    onClick: Function;
    size: number;
    icon: Element;
    title: string;
    color: string;
}
const IconButton = (props: mainProps) => {

    const onPress = () => {
        props.onClick(props.data)
    }
    return (
        <View
            style={styles.mainContainer}
        >
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    style={[styles.button, {
                        width: props.size ?? 60,
                        height: props.size ?? 60,
                        borderColor: props.color
                    }]}
                >
                    {props.icon}
                </View>
                <Text style={{ color: props.color, alignSelf: 'center' }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { justifyContent: 'center', alignContent: 'center' },
    button: {
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5
    },
})

export default IconButton;