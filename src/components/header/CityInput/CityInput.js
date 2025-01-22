'use client';
import styles from "./CityInput.module.css";

export default function CityInput({setCity}) {
  return (
    <div className={styles.outerWrap}>
      <input type="text" placeholder="your city"/>
      <button className="button" onClick={(e) => {
        console.log(e.target.previousElementSibling.value)
        setCity(e.target.previousElementSibling.value)
      }}>set city</button>
    </div>
  );
}
