'use client';
import styles from "./CityInput.module.css";

export default function CityInput({setCity}) {
  return (
    <div className={styles.outer_wrap}>
      <h5>Vash Gorod</h5>
      <input type="text" placeholder="Ваш город:"/>
      <button onClick={(e) => {
        console.log(e.target.previousElementSibling.value)
        setCity(e.target.previousElementSibling.value)
      }}>set city</button>
    </div>
  );
}
