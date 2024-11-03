

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw5CheBznqdIygChOwrWm9rKi0wgqUq9Y",
  authDomain: "insta-clone-yt-2cfa3.firebaseapp.com",
  projectId: "insta-clone-yt-2cfa3",
  storageBucket: "insta-clone-yt-2cfa3.appspot.com",
  messagingSenderId: "68772076676",
  appId: "1:68772076676:web:d1fa58e3e8996a73d3f6d1",
  measurementId: "G-L5ZNVLBVSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };