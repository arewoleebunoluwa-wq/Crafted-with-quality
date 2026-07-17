import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDT14OtQuym0kniL6eoIzfcnrK_5OZ5s-w",
  authDomain: "auracast-studio.firebaseapp.com",
  projectId: "auracast-studio",
  storageBucket: "auracast-studio.firebasestorage.app",
  messagingSenderId: "660516132916",
  appId: "1:660516132916:web:8a3a048e01d3272cc29261",
  measurementId: "G-KQDL6Z0XRV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const message = document.getElementById("message");

signupBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    message.textContent = "Account created successfully!";
  } catch (error) {
    message.textContent = error.message;
  }
});

loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    message.textContent = "Login successful!";
  } catch (error) {
    message.textContent = error.message;
  }
});