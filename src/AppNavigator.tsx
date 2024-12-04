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
import FieldProductorDetails from './pages/ProductorPages/FieldProductorDetails';
import StepOne from './pages/Analysis/StepOne';
import StepTwo from './pages/Analysis/StepTwo';
import StepThree from './pages/Analysis/StepThree';
import StepFour from './pages/Analysis/StepFour';

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
        <Stack.Screen name="FieldProductorDetails" component={withContainer(FieldProductorDetails,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>
        <Stack.Screen name="StepOne" component={withContainer(StepOne,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>
        <Stack.Screen name="StepTwo" component={withContainer(StepTwo,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>
        <Stack.Screen name="StepThree" component={withContainer(StepThree,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>
        <Stack.Screen name="StepFour" component={withContainer(StepFour,{appBarShow: true, typeOfAppBar: "defaultAppBar"} )} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
