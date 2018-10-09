import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 42.360063,
                        longitude: -71.058792,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}>

                    <MapView.Marker
                        coordinate={{
                            latitude: 42.360063,
                            longitude: -71.058792 
                        }}
                    />
                
                </MapView>
            </View>
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});