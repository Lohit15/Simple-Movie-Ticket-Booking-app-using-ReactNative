import * as firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnomQJHW9jG4O4dDdhfDdx31NExMflrJI",
  authDomain: "signin-5f948.firebaseapp.com",
  databaseURL: "https://signin-5f948.firebaseio.com",
  projectId: "signin-5f948",
  storageBucket: "signin-5f948.appspot.com",
  messagingSenderId: "943717543628",
  appId: "1:943717543628:web:34fbedeb154d1fead99c69",
  measurementId: "G-BX2J0GTDHP"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;