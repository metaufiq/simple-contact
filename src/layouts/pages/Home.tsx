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
   FlatList,
     StyleSheet,
   View,
 } from 'react-native';
import { useSelector } from 'react-redux';
import contactAction from '../../actions/contactAction';
import ContactType from '../../config/types/domain/ContactType';
import contactService from '../../services/contactService';
import { RootType } from '../../store';
import { useThunkDispatch } from '../../utils/hooks';
import FAB from '../atoms/FAB';
import ContactCard from '../molecules/ContactCard';

interface mainProps {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
}
 const Home = (props: mainProps) => {
   const contacts = useSelector((state:RootType)=> state.contactReducer.contactList);
   const dispatch  = useThunkDispatch();
   const getContacts = async ()=>{

    await dispatch(contactAction.getList());
   }


   useEffect(()=>{
    getContacts();
   },[]);

   const onChooseContact = (contact:ContactType)=>{
       props.navigation.push('ContactDetail', {contact, type: 'edit'});
   }
   const onAddContact = ()=>{
        props.navigation.push('ContactDetail', {type: 'add'});
   }
   const renderContactCard = ({item, index}: {item: ContactType; index: number}) => {
    return <ContactCard data={item} key={index} onClick={onChooseContact} />;
  };
   return (
    <View style={styles.mainContainer}>
      <FlatList
        data={contacts}
        renderItem={renderContactCard}
        keyExtractor={(key)=>key.id!}
      />
      <FAB onClick={onAddContact}></FAB>
    </View>
   );
 };


 const styles = StyleSheet.create({
     mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        paddingVertical:20,
    }
 })
 export default Home;
