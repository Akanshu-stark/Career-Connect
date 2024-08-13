// Import the functions you need from the SDKs you need
import app from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "*********Enter Your API Key**************",
  authDomain: "*********************************",
  projectId: "********************",
  storageBucket: "*****************",
  messagingSenderId: "*****************",
  appId: "************************",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

const firestore=firebase.firestore();

export {firebase, firestore, app};
