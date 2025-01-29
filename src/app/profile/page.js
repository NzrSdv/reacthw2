"use client";
import { useRouter } from "next/navigation";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function Profile() {
  const {isAuthorised,user} = useSelector((state) => state.Authentification)
    const router = useRouter();
    useEffect(() => {
        if(!isAuthorised || user == {}){
            router.push("/login")
        }
    },[isAuthorised,user])
  return (
    <div className="container" style={{margin:"0 5dvw 0"}}>
      <div className={styles.profile}>
        <h1>Ваш Профиль</h1>
      <h2>Имя: {user?.username}</h2>
      <h3>Почта: {user?.email}</h3>
      <h4>Пароль: {user?.password}</h4>
      <button className={`button ${styles.logout}`}
        onClick={() => {
          log(false);
          UserFunc({});
            router.push("/login");
        }}
      >
        Log out
      </button>
      </div>
    </div>
  );
}
