
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIjoLRH45S6nL2TkuXZIWscB5HtaxMI6E",
  authDomain: "ecommerce-yanibelli.firebaseapp.com",
  projectId: "ecommerce-yanibelli",
  storageBucket: "ecommerce-yanibelli.appspot.com",
  messagingSenderId: "711272200854",
  appId: "1:711272200854:web:41f23f024af4573ef020b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
return app
}