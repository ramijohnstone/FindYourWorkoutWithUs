// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9BHN5zh3xTJ2CtskBkFGAoCk9rlin5cI",
  authDomain: "findyourworkout-41994.firebaseapp.com",
  projectId: "findyourworkout-41994",
  storageBucket: "findyourworkout-41994.appspot.com",
  messagingSenderId: "104547054275",
  appId: "1:104547054275:web:6061455f9c375451cfa876"
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
