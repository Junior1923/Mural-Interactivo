import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5m-CdQEoDuHXkDOPnghNbemrB0dffHfY",
  authDomain: "mural-60d4b.firebaseapp.com",
  projectId: "mural-60d4b",
  storageBucket: "mural-60d4b.appspot.com",
  messagingSenderId: "179571373644",
  appId: "1:179571373644:web:b90c81a4d3cbec36a526e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();