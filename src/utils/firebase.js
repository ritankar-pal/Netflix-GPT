// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVKayt5j3Q_dfuJV9UAhcSM2oSHSCbvF4",
  authDomain: "netflix-gpt-486ae.firebaseapp.com",
  projectId: "netflix-gpt-486ae",
  storageBucket: "netflix-gpt-486ae.appspot.com",
  messagingSenderId: "877410251035",
  appId: "1:877410251035:web:5ffe9f6468db0c93bc63be",
  measurementId: "G-6BY5FBHHB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();