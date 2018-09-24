import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Loginform extends React.Component {
    render() {
      return (
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
              <View style={styles.loginformcontainer}>

                  <TextInput style={styles.textinput}
                  underlineColorAndroid='transparent' 
                  placeholder='Email'
                  keyboardType='email-address' 
                  returnKeyType='next'
                  autoCorrect={false}
                  />

                  <TextInput style={styles.textinput}
                  underlineColorAndroid='transparent' 
                  placeholder='Password' 
                  returnKeyType='go'
                  secureTextEntry
                  autoCorrect={false}
                  />


              </View>
          </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    loginformcontainer: {
      alignItems: 'center',
      marginTop: 250,
    },
    textinput: {
      color: '#624735',
      alignSelf: 'stretch',
      padding: 12,
      marginBottom: 10,
      backgroundColor: 'rgba(255,255,255, 0.2)',
      borderColor: '#624735',
      borderWidth: 0.6,
    }

  });
