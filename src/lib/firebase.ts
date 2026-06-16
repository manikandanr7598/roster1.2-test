// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWx422FoYTuIEptJHH8C7_zbGM3qyVSII",
  authDomain: "whms-test.firebaseapp.com",
  projectId: "whms-test",
  storageBucket: "whms-test.firebasestorage.app",
  messagingSenderId: "233126942198",
  appId: "1:233126942198:web:4745d82542c17051bb63d7",
  measurementId: "G-KGTHCGL1SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
