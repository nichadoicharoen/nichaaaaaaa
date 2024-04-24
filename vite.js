// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIJiG_wuK-GKdyhQSyGS3k4eTRtMFFh6s",
  authDomain: "fcm-demo-d6426.firebaseapp.com",
  projectId: "fcm-demo-d6426",
  storageBucket: "fcm-demo-d6426.appspot.com",
  messagingSenderId: "121626189256",
  appId: "1:121626189256:web:caee9a5b683b72aaceb4fd",
  measurementId: "G-GE3W4EW9JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);