import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { auth, db } from "./firebase.js";

const storage = getStorage();
const DEFAULT_PHOTO_PATH = "defaultphoto/userphotocards.jpg";

const registerUser = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const defaultPhotoRef = ref(storage, DEFAULT_PHOTO_PATH);

    const photoURL = await getDownloadURL(defaultPhotoRef);

    const userData = {
      email: email,
      username: username,
      userphoto: photoURL,
    };

    await setDoc(doc(db, "users", user.uid), userData);

    console.log("User registered successfully:", user);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error registering user:", error);
    alert(`Registration failed: ${error.message}`);
  }
};

document.querySelector("#registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;
  const username = document.querySelector("#username").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  registerUser(email, password, username);
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
