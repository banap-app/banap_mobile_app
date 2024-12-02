import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import withContainer from './utils/withContainer'; // Importe o HOC
import ProductorRegister from './pages/ProductorRegister/ProductorRegister';
import EnginnerRegister from './pages/EnginnerRegister';
import { LoginPage } from './pages/LoginPage';
import { InitialProductorPage } from './pages/ProductorPages/InitialProductorPage';
import { RegisterProperty } from './pages/ProductorPages/RegisterProperty';
import FieldProductorRegister from './pages/ProductorPages/FieldProductorRegister';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={withContainer(Login, {appBarShow: false, typeOfAppBar: "defaultAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={withContainer(Register, {appBarShow: true, typeOfAppBar: "defaultAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="ProductorRegister" component={withContainer(ProductorRegister, {appBarShow: true, typeOfAppBar: "defaultAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="EnginnerRegister" component={withContainer(EnginnerRegister, {appBarShow: true, typeOfAppBar: "defaultAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={withContainer(LoginPage, {appBarShow: false, typeOfAppBar: "defaultAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="InitialProductorPage" component={withContainer(InitialProductorPage, {appBarShow: true, typeOfAppBar: "userAppBar"})} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterProperty" component={withContainer(RegisterProperty,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>
        <Stack.Screen name="FieldProductorRegister" component={withContainer(FieldProductorRegister,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
