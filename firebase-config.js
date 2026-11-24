// TODO: Reemplaza los valores placeholders con tus credenciales de Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TAIzaSyD7treJIo9ho_kXmJsN4IKuLh0WHRN_Hu4",
  authDomain: "tg2026-2.firebaseapp.com",
  projectId: "tg2026-2",
  storageBucket: "tg2026-2.firebasestorage.app",
  messagingSenderId: "650836707009",
  appId: "1:650836707009:web:4ddd7a0d24edb2caf3f640",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
