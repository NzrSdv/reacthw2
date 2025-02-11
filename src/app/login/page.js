"use client";
import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setIsAuthorised,
  setUser,
} from "../store/Slices/AuthentificationSlice";

export default function Login() {
  //needed variables

  // const { isAuthorised, log, user, UserFunc } = useAuth();
  const dispatch = useDispatch();
  const isAuthorised = useSelector(
    (state) => state.Authentification.isAuthorised
  );
  const router = useRouter();

  //dispatch functions
  const setNewIsAuthorised = (newState) => {
    dispatch(setIsAuthorised(newState));
  };

  const setNewUser = (newUser) => {
    dispatch(setUser(newUser));
  };

  //useStates
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  //useEffects
  useEffect(() => {
    if (isAuthorised) {
      router.push("/");
    }
  }, [isAuthorised]);

  //functions
  function Valid() {
    if (
      userName.match(/\d+/g) ||
      !userEmail.includes("@") ||
      userPassword.length < 8
    ) {
      return false;
    } else {
      return true;
    }
  }
  function SetAndChekc() {
    if (Valid()) {
      setNewUser({
        username: userName,
        email: userEmail,
        password: userPassword,
      });
      setIsValid(true);
      setNewIsAuthorised(true);
      console.log(isAuthorised);
    } else {
      setIsValid(false);
    }
  }

  //jsx
  return (
    <div className="container" style={{ margin: "70px 5dvw 0 " }}>
      <div className={styles.inputs}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            SetAndChekc();
          }}
          className="button"
        >
          Log in
        </button>
      </div>
      {/* Window that inputs are not valid))) */}
      {!isValid && (
        <div className={styles.invalid}>
          <div className={styles.window}>
            <h2>Invalid input</h2>
            <p>Your username, email or password were typed wrong</p>
            <button
              onClick={() => {
                setIsValid(true);
              }}
              className="button"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
