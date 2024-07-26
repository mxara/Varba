import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { auth, db } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const usernameOrEmailInput = document.querySelector("#usernameOrEmail");
  const passwordInput = document.querySelector("#password");
  const loginError = document.querySelector("#loginError");
  const registerBtn = document.querySelector("#registerBtn");
  const loginWithGoogleBtn = document.querySelector("#loginWithGoogle");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usernameOrEmail = usernameOrEmailInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      let userCredential;

      if (usernameOrEmail.includes("@")) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          usernameOrEmail,
          password
        );
      } else {
        const userDocRef = doc(db, "users", usernameOrEmail);
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          const userEmail = userData.email;
          userCredential = await signInWithEmailAndPassword(
            auth,
            userEmail,
            password
          );
        } else {
          throw new Error("Invalid username or password.");
        }
      }

      window.location.href = "index.html";
    } catch (error) {
      loginError.textContent = "Invalid email/username or password.";
    }
  });

  registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
  });

  loginWithGoogleBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "index.html";
    } catch (error) {
      loginError.textContent =
        "Error signing in with Google. Please try again.";
    }
  });
});
