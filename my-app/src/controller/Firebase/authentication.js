import * as firebase from "firebase";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDElN3SZfpzti59mYGAI_zM6QB9B81IiQs",
    authDomain: "alicorp-b0160.firebaseapp.com",
    databaseURL: "https://alicorp-b0160.firebaseio.com",
    projectId: "alicorp-b0160",
    storageBucket: "alicorp-b0160.appspot.com",
    messagingSenderId: "58402545734",
    appId: "1:58402545734:web:241abbaef60824a7"
  };
  // Initialize Firebase

export  const firebaseAuth = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const productsData = firestore.collection("allProducts");