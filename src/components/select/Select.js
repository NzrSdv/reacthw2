'use client';
import styles from "./Select.module.css";
export default function Select({selectBooks,setSelectBooks}) {
  return (
    <select value={selectBooks} onChange={(e) => {setSelectBooks(e.target.value)}} className={styles.select}>
      <option value="index">по порядку</option>
      <option value="title">по заголовку</option>
      <option value="description"> по описанию</option>
      <option value="originalTitle"> по оригинальному названию</option>
      <option value="releaseDate"> по дате выпуска</option>
      <option value="pages">по количеству</option>

    </select>
  );
}
