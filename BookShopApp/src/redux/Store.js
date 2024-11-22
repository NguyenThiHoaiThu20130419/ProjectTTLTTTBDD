import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/Reducer';
import { productReducer } from './Product/Reducer';

const rootReducer = {
  auth: authReducer,
  product: productReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
