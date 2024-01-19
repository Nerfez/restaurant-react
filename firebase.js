// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUI4d7gwrcjjlXzsvFCnYE1yCNrhu9xc",
  authDomain: "restaurant-diginamic-colivier.firebaseapp.com",
  projectId: "restaurant-diginamic-colivier",
  storageBucket: "restaurant-diginamic-colivier.appspot.com",
  messagingSenderId: "94979379289",
  appId: "1:94979379289:web:40b87a87fc5ac3e1c3e148",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
