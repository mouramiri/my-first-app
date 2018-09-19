import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Loginform extends React.Component {
    render() {
      return (

            <View style={styles.loginformcontainer}>

                <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.textinput} />
                <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.textinput} />

            </View>
            
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
