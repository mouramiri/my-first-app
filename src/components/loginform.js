import React from 'react';
import { StyleSheet, Text,  View, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Loginform extends React.Component {
    render() {
      return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View style={styles.loginformcontainer}>

                    <View>                        
                        <Text style={styles.titletext}> Welcome</Text> 
                        <Text style={styles.titletext}> CoffeeLover!</Text>
                    </View>

                  <View style={styles.inputcontainer}>
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

                  <View>
                    <Text style={styles.forgottext}>Forgot Password</Text>
                  </View>

                  <View style={styles.buttoncontainer}>
                    <Button                  
                      title='Log In' rounded
                      titleStyle={{ fontSize: 22 }}
                      buttonStyle={{
                        backgroundColor: '#B98068',
                        width: 375,
                        height: 60,
                        borderColor: 'transparent',
                        borderWidth: 0.6,
                      }}
                      containerStyle={{ marginTop: 70 }}
                    />
                  </View>

                  <Text style={styles.registercontainer}>
                    <Text style={styles.accounttext}>Don't have an account?</Text>
                    <Text style={styles.registertext}>{" "}Register</Text>
                  </Text>
              </View>
          </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    loginformcontainer: {
      marginTop: 400
    },
    textinput: {
      color: '#624735',
      alignSelf: 'stretch',
      padding: 12,
      marginBottom: 10,
      backgroundColor: 'rgba(255,255,255, 0.2)',
      borderColor: '#624735',
      borderWidth: 0.6
    },
    titletext: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#8C746A',
      marginBottom: 5,
      alignSelf: 'center'
    },
    buttoncontainer: {
      marginTop: 10,
      alignSelf: 'center'
    },
    forgottext: {
      color: '#B98068',
      fontSize: 14,
      alignSelf: 'flex-end',
      marginBottom: 20
    },
    accounttext: {
      color: '#9B9B9B',
      fontSize: 14
    },
    registertext: {
      color: '#B98068',
      fontSize: 14,
      marginRight: 5
    },
    registercontainer: {
      alignSelf: 'center'
    },
    inputcontainer: {
      marginTop: 30
    }

  });
