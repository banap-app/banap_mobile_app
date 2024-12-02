import { setLocation } from './locationSlice';

export const updateLocation = (latitude: number, longitude: number) => {
  return setLocation({ lat: latitude, lon: longitude });
};
