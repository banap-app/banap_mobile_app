import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import withContainer from './utils/withContainer'; // Importe o HOC
import ProductorRegister from './pages/ProductorRegister/ProductorRegister';
import EnginnerRegister from './pages/EnginnerRegister';
import { LoginPage } from './pages/LoginPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={withContainer(Login)} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={withContainer(Register)} options={{ headerShown: false }} />
        <Stack.Screen name="ProductorRegister" component={withContainer(ProductorRegister)} options={{ headerShown: false }} />
        <Stack.Screen name="EnginnerRegister" component={withContainer(EnginnerRegister)} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={withContainer(LoginPage)} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Details" component={withContainer(DetailsScreen)} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
