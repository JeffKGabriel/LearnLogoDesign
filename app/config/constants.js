import firebase from 'firebase'

var config = {
    apiKey: "",
    authDomain: "asdasdasd.firebaseapp.com",
    databaseURL: "https://asdasdasd.firebaseio.com",
    storageBucket: "asdasdasd.appspot.com",
    messagingSenderId: "",
};

firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
