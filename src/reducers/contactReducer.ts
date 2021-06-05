import {createReducer} from '@reduxjs/toolkit';
import contactAction from '../actions/contactAction'

export interface contactReducerState {
  contactList: [];
}
const initialState: contactReducerState = {
    contactList: [],
};
const contactReducer = createReducer(initialState, builder => {
  builder.addCase(contactAction.getList.fulfilled, (state, action) => {
    return {...state, contactList: action.payload.contactList};
  });
});

export default contactReducer;