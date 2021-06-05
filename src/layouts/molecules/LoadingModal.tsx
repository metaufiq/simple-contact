import { ActivityIndicator, Modal, StyleSheet, View } from "react-native"
import React from 'react'

interface mainProps{
    visible: boolean
}
const LoadingModal = (props: mainProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={[styles.container]}>

                    <ActivityIndicator size="large" color="white" />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        opacity: 0.8,
    },
})

export default LoadingModal;