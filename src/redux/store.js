import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import schoolReducer from './reducers/schoolReducer';

const store =  configureStore({
  reducer: {
    user:userReducer,
    school:schoolReducer
  },
});

export default store;