// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR1LAfKL7PIOHD0TT7_sFyyC0QfnUnL3s",
  authDomain: "netflix-clone-32c12.firebaseapp.com",
  projectId: "netflix-clone-32c12",
  storageBucket: "netflix-clone-32c12.firebasestorage.app",
  messagingSenderId: "657300588195",
  appId: "1:657300588195:web:697da58e8d84ff85156116",
  measurementId: "G-R3EEJCGG31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(); 