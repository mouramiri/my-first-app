import React from 'react';
import { StyleSheet, Text,  View, TextInput, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class ForgotPassword extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.loginformcontainer}>
                    <View>                        
                        <Text style={styles.titletext}>Password Reset</Text> 
                    </View>

                    <View style={styles.inputcontainer}>
                        <TextInput style={styles.textinput}
                            underlineColorAndroid='transparent' 
                            placeholder='Email'
                            keyboardType='email-address' 
                            returnKeyType='next'
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.buttoncontainer}>
                        <Button 
                            onPress={this.handleClick}
                            title='Reset' rounded
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
    inputcontainer: {
        marginTop: 50
    }
});