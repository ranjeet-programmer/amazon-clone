import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBk83TV38r0SZ9wfEkKo6NLfExzPiV9Z4Y",
    authDomain: "clone-2dfc9.firebaseapp.com",
    projectId: "clone-2dfc9",
    storageBucket: "clone-2dfc9.appspot.com",
    messagingSenderId: "606328274750",
    appId: "1:606328274750:web:6d130d9d55e58eb22c766f",
    measurementId: "G-FZ0P7PYD9E"
  });


  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,provider,auth}
