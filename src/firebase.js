import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATk1TG9D9vDGTv3gIedWAYlZ47323ttyo",
  authDomain: "twitter-clone-63818.firebaseapp.com",
  projectId: "twitter-clone-63818",
  storageBucket: "twitter-clone-63818.appspot.com",
  messagingSenderId: "47289030721",
  appId: "1:47289030721:web:967b73cd4e149a3d820ec0",
  measurementId: "G-6Y71E787MT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
