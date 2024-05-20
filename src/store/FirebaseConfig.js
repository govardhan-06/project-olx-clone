import firebase from "firebase"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGZNcNfh7XH-C8gV474-NTfjC4iqil1xo",
    authDomain: "olx-clone-8755a.firebaseapp.com",
    projectId: "olx-clone-8755a",
    storageBucket: "olx-clone-8755a.appspot.com",
    messagingSenderId: "318276414214",
    appId: "1:318276414214:web:f467990138616aac2e4c87",
    measurementId: "G-5BQFWBCWGY"
};

export const Firebase = firebase.initializeApp(firebaseConfig);