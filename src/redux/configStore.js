import { configureStore } from '@reduxjs/toolkit';
import { xucXacReducer } from './reducer/xucXacReducer';

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return 'Minh Long';
    },
    xucXacReducer,
  },
});
