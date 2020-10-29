import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';


SplashScreen.hide();
console.disableYellowBox = true;

export default function App() {
 return (
  <NavigationContainer >
     <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes/>
     </AuthProvider>
  </NavigationContainer>
  );
}