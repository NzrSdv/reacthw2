'use client'; 
import React, { useState } from "react";
import CityInput from "./CityInput/CityInput.js";
import styles from "./Header.module.css";

export default function Header() {
  const [city, setCity] = useState("");
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">Logo</a>
        <h6 className={styles.city}>{city}</h6>
      </div>
      <CityInput setCity={setCity} />
    </header>
  );
}
