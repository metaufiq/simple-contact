/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState } from 'react';
 import {
   FlatList,
   StyleSheet,
   View,
 } from 'react-native';
import ContactType from './src/config/types/domain/ContactType';
import ContactCard from './src/layouts/molecules/ContactCard';
import contactService from './src/services/contactService';

 const App = () => {
   const [contacts, setContacts] = useState();

   const getContacts = async ()=>{
    const contacts = await contactService.list();
    console.log(contacts);
    
    setContacts(contacts);
   }

   useEffect(()=>{
    getContacts();
   },[]);

   const onChooseContact = ()=>{}
   const renderContactCard = ({item, index}: {item: ContactType; index: number}) => {
    return <ContactCard data={item} key={index} onClick={onChooseContact} />;
  };
   return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={contacts}
        renderItem={renderContactCard}
        keyExtractor={(key)=>key.id}
      />
    </View>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
