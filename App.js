import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import LoginScreen from './src/components/loginscreen';
import Registration from './src/components/registrationform';
import ForgotPassword from './src/components/forgotpasswordform';
import HomeScreen from './src/components/homescreen';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Registration: { screen: Registration },
  ForgotPassword: { screen: ForgotPassword },
  Home: { screen: HomeScreen }
});

export default App;
