import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ContactType from '../../config/types/domain/ContactType';

interface mainProps {
  data?: ContactType;
  onClick: Function;
}

const ContactCard = (props: mainProps) => {
  const onClick = () => {
    props.onClick(props.data);
  };
  return (
    <View
      style={styles.mainContainer}>
      <View>
        <View style={styles.contentContainer}>
          <Image source={{uri: props.data?.photo}} style={styles.contentImage}>
          </Image>
          <View style={styles.contentInformation}>
            <Text>{props.data?.firstName} {props.data?.lastName}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  contentImage: {
    justifyContent: 'center',
    width:50,
    height:50,
    borderRadius:25
  },
  contentInformation: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default ContactCard;
