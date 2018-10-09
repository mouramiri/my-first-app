// @flow
const config = {
    apiKey: "AIzaSyAlIMCQk6EQw56bKObMx2Kz0XkJD9vN7M4",
    authDomain: "coffeefinder-app.firebaseapp.com",
    databaseURL: "https://coffeefinder-app.firebaseio.com",
    projectId: "coffeefinder-app",
    storageBucket: "coffeefinder-app.appspot.com",
    messagingSenderId: "555025724148"
};

export default class Firebase {
    static init() {
        firebase.initializeApp(config);
    }
}