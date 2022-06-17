// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjeOwX06Lf1ZheQlMwzSRhuP-bqU1w5L0",
  authDomain: "findworkout.firebaseapp.com",
  projectId: "findworkout",
  storageBucket: "findworkout.appspot.com",
  messagingSenderId: "800890564451",
  appId: "1:800890564451:web:f3661733bce90d0429ed56"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
