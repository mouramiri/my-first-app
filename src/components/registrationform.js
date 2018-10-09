import React from 'react';
import { StyleSheet, Text,  View, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class Registration extends React.Component {
    handleClick(screen) {
        const { navigate } = this.props.navigation;
        navigate(screen)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.registrationformcontainer}>
                    <View>                        
                        <Text style={styles.titletext}>Create Your</Text> 
                        <Text style={styles.titletext}>CoffeeLover Account!</Text>
                    </View>

                    <View style={styles.inputcontainer}>
                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='First Name'
                            keyboardType='email-address' 
                            returnKeyType='next'
                            autoCorrect={false}
                        />

                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='Last Name' 
                            returnKeyType='next'
                            secureTextEntry
                            autoCorrect={false}
                        />

                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='Email' 
                            returnKeyType='next'
                            secureTextEntry
                            autoCorrect={false}
                        />

                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='Password' 
                            returnKeyType='next'
                            secureTextEntry
                            autoCorrect={false}
                        />

                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='Confirm Password' 
                            returnKeyType='go'
                            secureTextEntry
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.buttoncontainer}>
                        <Button 
                        onPress={this.handleClick.bind(this, 'Home')}
                        title='Register' rounded
                        titleStyle={{ fontSize: 22 }}
                        buttonStyle={{
                            backgroundColor: '#B98068',
                            width: 375,
                            height: 60,
                            borderColor: 'transparent',
                            borderWidth: 0.6
                        }}
                        containerStyle={{ marginTop: 70 }}
                        />
                    </View>

                    <Text style={styles.logincontainer}>
                        <Text style={styles.accounttext}>Already have an account?</Text>
                        <Text style={styles.logintext} onPress={this.handleClick.bind(this, 'Login')}>{" "}Log In</Text>
                    </Text>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignSelf: 'stretch',
        width: null,
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    titletext:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#8C746A',
        marginBottom: 5,
        alignSelf: 'center'
    },
    textinput: {
        color: '#624735',
        alignSelf: 'stretch',
        padding: 12,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderColor: '#624735',
        borderWidth: 0.6
    },
    buttoncontainer: {
        marginTop: 20,
        alignSelf: 'center'
    },
    accounttext: {
        color: '#9B9B9B',
        fontSize: 14
    },
    logintext: {
        color: '#B98068',
        fontSize: 14,
        marginRight: 5
    },
    logincontainer: {
        alignSelf: 'center',
        marginTop: 10
    },
    inputcontainer: {
        marginTop: 50
    }

});