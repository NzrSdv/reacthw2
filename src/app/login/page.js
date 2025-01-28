"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Login() {
  const { isAuthorised, log, user, UserFunc } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (isAuthorised) {
      router.push("/");
    }
  }, [isAuthorised]);

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
    setIsValid(Valid());
    if (Valid()) {
      UserFunc({
        username: userName,
        email: userEmail,
        password: userPassword,
      });
      log(true);
    }
  }
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
