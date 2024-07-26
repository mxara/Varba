// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDa6Xnr0nvMBJxyyQRQvey9mLHcYh19ZyI",
  authDomain: "varba-6af4d.firebaseapp.com",
  projectId: "varba-6af4d",
  storageBucket: "varba-6af4d.appspot.com",
  messagingSenderId: "197180298635",
  appId: "1:197180298635:web:4dc7228a012b64efe8cb8e",
  measurementId: "G-9CQS1ZC7X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
