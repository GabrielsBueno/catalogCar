// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsDy-ZIpTrA2hMuRKs_Jh4dDh18sPz5gw",
  authDomain: "carcatalog-225da.firebaseapp.com",
  projectId: "carcatalog-225da",
  storageBucket: "carcatalog-225da.appspot.com",
  messagingSenderId: "383519177369",
  appId: "1:383519177369:web:7590cd7b9ef03b43815608",
  measurementId: "G-Y8WJ41LW0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

