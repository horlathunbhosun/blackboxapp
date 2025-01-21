import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your own Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyCWKJuaLxNkybojUuiE6XQW0b2Ia6QYBQY",
  authDomain: "blackbox-44f17.firebaseapp.com",
  projectId: "blackbox-44f17",
  storageBucket: "blackbox-44f17.firebasestorage.app",
  messagingSenderId: "170678016423",
  appId: "1:170678016423:web:8531805bc204598c1b3e82",
  measurementId: "G-QPNQ5D8E6H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
