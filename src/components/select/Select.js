'use client';
import styles from "./Select.module.css";
export default function Select({selectBooks,setSelectBooks}) {
  return (
    <select value={selectBooks} onChange={(e) => {setSelectBooks(e.target.value)}} className={styles.select}>
      <option value="id">по порядку</option>
      <option value="book_name">по названию</option>
      <option value="book_review"> по обзору</option>
      <option value="printing_company"> по компании</option>
      <option value="printing_year"> по году</option>
      <option value="pricing">по цене</option>

    </select>
  );
}
