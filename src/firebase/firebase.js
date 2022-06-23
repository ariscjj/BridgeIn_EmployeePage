// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAlVlG1kyBBADSnsNwrU_aQ-XiOqOQDGXw",

  authDomain: "bridge-in.firebaseapp.com",

  projectId: "bridge-in",

  storageBucket: "bridge-in.appspot.com",

  messagingSenderId: "639258562322",

  appId: "1:639258562322:web:9143835496fffc54fc2dcb",

  measurementId: "G-1EBVVMLWDP"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export{
  db
}; 

