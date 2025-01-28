"use client";
import React, { useState } from "react";
import CityInput from "./CityInput/CityInput.js";
import styles from "./Header.module.css";
import Link from "next/link.js";
import { useAuth } from "@/app/context/AuthContext.js";

export default function Header() {
  const [city, setCity] = useState("");

  const { isAuthorised } = useAuth();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Main / Logo</Link>
        <h6 className={styles.city}>{city}</h6>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/authors">Authors</Link>
          </li>
          {!isAuthorised && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {isAuthorised && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>
        <CityInput setCity={setCity} />
      </div>
    </header>
  );
}
