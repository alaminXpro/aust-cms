// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-f509d.firebaseapp.com",
  projectId: "mern-f509d",
  storageBucket: "mern-f509d.appspot.com",
  messagingSenderId: "748599141033",
  appId: "1:748599141033:web:67e3cc9cc3ea176bd9ffb8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, storage };
