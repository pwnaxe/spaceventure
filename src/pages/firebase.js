import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config goes here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
