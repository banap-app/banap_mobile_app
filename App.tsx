import React from 'react';
import AppNavigator from './src/AppNavigator'; 
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/redux/store/store'
import useMontserratFonts from 'src/hooks/useMontserrat';


const App = () => {
  const { fontsLoaded } = useMontserratFonts();
  return (
    <Provider store={store}>
    <AppNavigator />  
  </Provider>
  );
}

export default App;
