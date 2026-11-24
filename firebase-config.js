// TODO: Reemplaza los valores placeholders con tus credenciales de Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAZAJWvEJepw9RAwUH0GWFOpuT6EO3u6E",
  authDomain: "expo2026-2.firebaseapp.com",
  projectId: "expo2026-2",
  storageBucket: "expo2026-2.firebasestorage.app",
  messagingSenderId: "363515182228",
  appId: "1:363515182228:web:1566cc5eddb33298500881"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
