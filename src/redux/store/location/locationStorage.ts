import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLocationToStorage = async (lat: number, lon: number) => {
  try {
    await AsyncStorage.setItem('userLocation', JSON.stringify({ lat, lon }));
  } catch (e) {
    console.error('Erro ao salvar a localização no armazenamento', e);
  }
};

export const getLocationFromStorage = async () => {
  try {
    const locationData = await AsyncStorage.getItem('userLocation');
    if (locationData) {
      return JSON.parse(locationData);
    }
    return null;
  } catch (e) {
    console.error('Erro ao recuperar a localização do armazenamento', e);
    return null;
  }
};
