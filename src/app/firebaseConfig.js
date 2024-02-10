import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQBObcCbdRfLIO2Y-TeKkdifbOI7NV9ls",
  authDomain: "visitor-count-73ff0.firebaseapp.com",
  databaseURL: "https://visitor-count-73ff0-default-rtdb.firebaseio.com",
  projectId: "visitor-count-73ff0",
  storageBucket: "visitor-count-73ff0.appspot.com",
  messagingSenderId: "707073096511",
  appId: "1:707073096511:web:654e51a7183596a920b18a",
  measurementId: "G-FP756X9HLL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
