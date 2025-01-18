'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "./SalesSection.module.css";
export default function SalesSection() {
  const images = [
    "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4956957/pexels-photo-4956957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/29458840/pexels-photo-29458840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6689137/pexels-photo-6689137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20804818/pexels-photo-20804818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4219037/pexels-photo-4219037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6770532/pexels-photo-6770532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [sliderIndex, setSliderIndex] = useState(0);
  function changeSlide(isLeft) {
    if (isLeft) {
      if (sliderIndex == 0) {
        setSliderIndex(9);
      } else {
        setSliderIndex(sliderIndex - 1);
      }
    } else {
      if (sliderIndex == 9) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }
  }
  return (
    <section className={styles.slider_element}>
      <h2>Sales ours</h2>

      <div className={styles.slider_element}>
      <div className={styles.slider}>
        <Image
          width={400}
          height={350}
          alt="some slider"
          src={images[sliderIndex == 0 ? 9 : sliderIndex - 1]}
        />
        <Image
          width={400}
          height={350}
          alt="some slider"
          src={images[sliderIndex]}
        />
        <Image
          width={400}
          height={350}
          alt="some slider"
          src={images[sliderIndex == 9 ? 0 : sliderIndex + 1]}
        />
      </div>
      <div className={styles.buttons}>
        <button className="leftBtn" onClick={() => {changeSlide(true)}}>Left</button>
        <button className="rightBtn" onClick={() => {changeSlide(false)}}>Right</button>
      </div>
      </div>
    </section>
  );
}
