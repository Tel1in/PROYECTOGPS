import firebase from 'firebase/compat/app'
import 'firebase/firestore'
const firebaseConfig= {
    apiKey: "AIzaSyABql5ElgVNimXM8AgpQgMEp0ATXIi6H4k",
    authDomain: "proyectogps-c4d09.firebaseapp.com",
    projectId: "proyectogps-c4d09",
    storageBucket: "proyectogps-c4d09.appspot.com",
    messagingSenderId: "562011197376",
    appId: "1:562011197376:web:847e2e244c41180b900225",
    measurementId: "G-DGRE0XP84Y"
};
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore