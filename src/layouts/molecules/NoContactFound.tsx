import { StyleSheet, Text, View } from "react-native"
import React from 'react'
const NoContactFound = () => {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>No Data Found</Text>
      </View>
    )
}

const styles = StyleSheet.create({
mainContainer:{ flex: 1, justifyContent: 'center', alignContent: 'center', height: '100%' },
text: { alignSelf: 'center', color:'gray' }
})
export default NoContactFound