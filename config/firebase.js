// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkt1BqDTvwZD-IEG17RNhRjPbMB8U2qNU",
  authDomain: "nollypulse.firebaseapp.com",
  projectId: "nollypulse",
  storageBucket: "nollypulse.firebasestorage.app",
  messagingSenderId: "507620339030",
  appId: "1:507620339030:web:0258343183d07cd16dbaf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}