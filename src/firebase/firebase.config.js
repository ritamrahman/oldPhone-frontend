// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp_zDisPR-TN78TYItQ-BwII2kctafrQY",
  authDomain: "oldphone-6dbc7.firebaseapp.com",
  projectId: "oldphone-6dbc7",
  storageBucket: "oldphone-6dbc7.appspot.com",
  messagingSenderId: "74948421228",
  appId: "1:74948421228:web:0f030aa78c27af67e9da4",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
