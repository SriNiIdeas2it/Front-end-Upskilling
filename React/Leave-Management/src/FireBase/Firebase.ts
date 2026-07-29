
declare module "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi0zAlK4XCloBApt1eVswXaExFO2vZOzQ",
  authDomain: "leave-management-7e3a9.firebaseapp.com",
  projectId: "leave-management-7e3a9",
  storageBucket: "leave-management-7e3a9.firebasestorage.app",
  messagingSenderId: "764459935120",
  appId: "1:764459935120:web:733db41f96cbab30f07f15",
  measurementId: "G-92D7TK59FW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;