import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Loginform from './loginform';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/splash/onboarding.png')} style={styles.container}>
    
                <Loginform {...this.props}/>
    
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
        padding: 20
      }
    });