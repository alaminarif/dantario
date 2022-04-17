// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCjO0jEr4hcT6kCrG4HWJUc7b9y8Ua6nlM",
//   authDomain: "assigment-10-47c9e.firebaseapp.com",
//   projectId: "assigment-10-47c9e",
//   storageBucket: "assigment-10-47c9e.appspot.com",
//   messagingSenderId: "1085673656111",
//   appId: "1:1085673656111:web:a80cb3d808c6115b625bda",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
