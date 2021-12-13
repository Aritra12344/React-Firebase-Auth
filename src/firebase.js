import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPiDrV_hD-d8qTi5m_S5nEjmQ7kMhwkzs",
  authDomain: "need-electronics-ddcf2.firebaseapp.com",
  databaseURL: "https://need-electronics-ddcf2-default-rtdb.firebaseio.com",
  projectId: "need-electronics-ddcf2",
  storageBucket: "need-electronics-ddcf2.appspot.com",
  messagingSenderId: "474998627815",
  appId: "1:474998627815:web:c196980950f90149c57142",
  measurementId: "G-M7R2H7MZ0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
