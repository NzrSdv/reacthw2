"use client";
import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthorised, setIsAuthorised] = useState();
  const [user,setUser] = useState();
  const log = (state) => {
    setIsAuthorised(state);
  };
  const UserFunc = (user) => {
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ isAuthorised, log,user,UserFunc }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
