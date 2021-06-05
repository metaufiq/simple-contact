import { Button, StyleSheet, Text, TouchableOpacity } from "react-native"
import React from 'react'

interface mainProps {
    data?: any;
    onClick: Function;
}
const FAB = (props:mainProps)=>{

    const onPress = ()=>{
        props.onClick(props.data)
    }
   return( 
   <TouchableOpacity
        style={styles.button}
        onPress={onPress}
    >
    <Text style={styles.plusIcon}>+</Text>
  </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#049BE5',                                    
        position: 'absolute',  
        alignItems:'center',  
        justifyContent:'center',                                   
        bottom: 30,                                                    
        right: 10,
        elevation:1,
    },
    plusIcon:{
        textAlign:'center',
        paddingBottom:3,
        fontSize:30,
        color:'white'
    }
})

export default FAB;