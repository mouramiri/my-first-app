import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

import Loginform from './src/components/loginform';

export default class App extends React.Component {
    render() {
      return (
        <ImageBackground source={require('./src/assets/splash/onboarding.png')} style={styles.container}>

           <Loginform />

        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'stretch',
      width: null,
      padding: 20,
    }
  });
