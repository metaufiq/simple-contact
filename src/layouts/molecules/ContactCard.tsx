import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContactType from '../../config/types/domain/ContactType';

interface mainProps {
  data?: ContactType;
  onClick: Function;
}

const ContactCard = (props: mainProps) => {
  const onClick = () => {
    props.onClick(props.data);
  };
  const profilePicture = props.data?.photo !== 'N/A' ? props.data?.photo : 'http://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s320/BlueHead.jpg';
  return (
    <TouchableOpacity onPress={onClick}>
    <View
      style={styles.mainContainer}>
      <View>
        <View style={styles.contentContainer}>
          <ImageBackground source={{uri: profilePicture}} style={styles.contentImage} imageStyle={styles.image}>
          </ImageBackground>
          <View style={styles.contentInformation}>
            <Text>Name: {props.data?.firstName} {props.data?.lastName}</Text>
            <Text>Age: {props.data?.age}</Text>

          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    borderRadius:10,
    marginHorizontal: 5,
    borderColor: '#D9D5DC',
    borderWidth: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  contentImage: {
    justifyContent: 'center',
    width:'100%',
    height:100,
    flex:1
  },
  image:{
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  contentInformation: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex:4
  },
});

export default ContactCard;
