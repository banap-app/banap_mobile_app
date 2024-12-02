import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definindo o tipo do estado
interface LocationState {
  latitude: number 
  longitude: number 
}

const initialState: LocationState = {
  latitude: 0,
  longitude: 0
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<{ lat: number; lon: number }>) => {
      state.latitude = action.payload.lat;
      state.longitude = action.payload.lon;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
