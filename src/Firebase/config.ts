import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBMcW27AK7TpATqC8KnhIspMXaSvNT2NfY",
  authDomain: "audiogram-b12c2.firebaseapp.com",
  projectId: "audiogram-b12c2",
  storageBucket: "audiogram-b12c2.appspot.com",
  messagingSenderId: "659997741920",
  appId: "1:659997741920:web:82c4b37f865fee6629c405",
  measurementId: "G-WWJYS0ZWE8",
};


const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase