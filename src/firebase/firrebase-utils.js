
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAyg0W7Ne0_19iw99v0YpPTNbbRQCdvplo",
  authDomain: "ec-myportfolio.firebaseapp.com",
  databaseURL: "https://ec-myportfolio.firebaseio.com",
  projectId: "ec-myportfolio",
  storageBucket: "ec-myportfolio.appspot.com",
  messagingSenderId: "345259326209",
  appId: "1:345259326209:web:24ebfc5ee8e043e7183900",
  measurementId: "G-WEPQYYF146"
};

  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore =firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;