import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const userContext = createContext();

import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //firebase services
  const signUpUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const updateUserProfile = (userProfile) =>
    updateProfile(auth.currentUser, userProfile);
  const loginUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const sendUserPwdResetEmail = (email)=>sendPasswordResetEmail(auth, email)
  const logOutUser = ()=>signOut(auth)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    signUpUser,
    updateUserProfile,
    loginUserWithEmailAndPassword,
    sendUserPwdResetEmail,
    logOutUser,
  };
  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthProvider;
