import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "digidb-55920.firebaseapp.com",
  projectId: "digidb-55920",
  storageBucket: "digidb-55920.appspot.com",
  messagingSenderId: "446247599948",
  appId: "1:446247599948:web:4aa58bf3b86cd85017d9e9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
