import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './reducers/contactReducer';

const store = configureStore({
  reducer: {
    contactReducer,
  },
});
export type RootType = ReturnType<typeof store.getState>;

export default store;