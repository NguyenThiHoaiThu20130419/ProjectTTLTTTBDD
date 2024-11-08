import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/Reducer';

const rootReducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
