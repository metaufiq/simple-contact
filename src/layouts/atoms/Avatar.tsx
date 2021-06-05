import { Image, StyleSheet, View } from "react-native";
import React from 'react'
interface mainProps {
    type: 'url';
    value: string | undefined;
    size: number;
    borderRadius?: number;
}
const Avatar = (props: mainProps) => {
    
    const profilePicture = props.value && props.value !== 'N/A'   ? props.value : 'http://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s320/BlueHead.jpg';

    return (
        <View style={{justifyContent:'center', alignContent:'center'}}>
            <Image source={{ uri: profilePicture }} style={[styles.image, { borderRadius: props.borderRadius ?? 50, height: props.size, width: props.size,}]}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignSelf:'center'
    },
})
export default Avatar;