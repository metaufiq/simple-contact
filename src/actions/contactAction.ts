import {createAsyncThunk} from '@reduxjs/toolkit';
import contactService from '../services/contactService';

const getList = createAsyncThunk('contact/list', async (params, thunkAPI) => {
    const contacts = await contactService.list();
    return{
        contactList: contacts
    }   

});

const contactAction = {
  getList,
};

export default contactAction;