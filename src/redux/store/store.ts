import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location/locationReducer';  // Importando o reducer

const store = configureStore({
  reducer: {
    location: locationReducer,  // Adicionando o reducer de localização
  },
});

export default store;
