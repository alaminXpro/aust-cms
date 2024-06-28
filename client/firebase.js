// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-f509d.firebaseapp.com",
  projectId: "mern-f509d",
  storageBucket: "mern-f509d.appspot.com",
  messagingSenderId: "748599141033",
  appId: "1:748599141033:web:67e3cc9cc3ea176bd9ffb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };