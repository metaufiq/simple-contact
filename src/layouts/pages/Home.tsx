/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import contactAction from '../../actions/contactAction';
import ContactType from '../../config/types/domain/ContactType';
import { RootType } from '../../store';
import { useThunkDispatch } from '../../utils/hooks';
import FAB from '../atoms/FAB';
import ContactCard from '../molecules/ContactCard';
import NoContactFound from '../molecules/NoContactFound';

interface mainProps {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}

const Home = (props: mainProps) => {
  const contacts = useSelector((state: RootType) => state.contactReducer.contactList);
  const dispatch = useThunkDispatch();
  const [refresh, setRefresh] = useState(true);

  const getContacts = async () => {
    try {
      await dispatch(contactAction.getList());
      setRefresh(false)

    } catch (error) {
      setRefresh(false)

      Alert.alert(
        "Oops,There Is Some Error",
        error.message
      );
    }
  }


  useEffect(() => {
    getContacts();
  }, []);

  const onChooseContact = (contact: ContactType) => {
    props.navigation.push('ContactDetail', { contact, type: 'edit' });
  }
  const onAddContact = () => {
    props.navigation.push('ContactDetail', { type: 'add' });
  }
  const renderContactCard = ({ item, index }: { item: ContactType; index: number }) => {
    return <ContactCard data={item} key={index} onClick={onChooseContact} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={contacts}
        onRefresh={getContacts}
        refreshing={refresh}
        ListEmptyComponent={NoContactFound}
        renderItem={renderContactCard}
        keyExtractor={(key) => key.id!}
      />
      <FAB onClick={onAddContact}></FAB>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 20,
  }
})
export default Home;
