import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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