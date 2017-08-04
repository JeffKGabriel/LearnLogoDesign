import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBCDL7gjQsE4iY2IqOHYMB9r3_MAgDkNoo",
    authDomain: "ytradio-6ba83.firebaseapp.com",
    databaseURL: "https://ytradio-6ba83.firebaseio.com",
    storageBucket: "ytradio-6ba83.appspot.com",
    messagingSenderId: "1009958681823",
};

firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
