

import { FaCode, FaRocket, FaChalkboardTeacher } from "react-icons/fa";

import style from "./trast.module.css";

const Trast = () => {
  return (
    <div className={style.Trasst_container}>
      <div className={style.trustBlock}>
        <h2>რატომ უნდა აირჩიოთ ჩვენი კურსები?</h2>

        <p>
          ის გაძლევს არა მხოლოდ ცოდნას, არამედ უნარებს,
          რომელიც გამოიყენება რეალურ პრაქტიკაში.
        </p>
      </div>

      <div className={style.trust_cards}>
        <div className={style.card}>
          <div className={style.icon}>
            <FaCode />
          </div>

          <h3>პრაქტიკული სწავლა</h3>

          <p>ყველაფერი ეფუძნება რეალურ ამოცანებს.</p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <FaRocket />
          </div>

          <h3>რეალური პროექტები</h3>

          <p>შექმნი ისეთ პროექტებს, როგორიც კომპანიებშია.</p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <FaChalkboardTeacher />
          </div>

          <h3>მენტორის მხარდაჭერა</h3>

          <p>მენტორები დაგეხმარებიან ყველა ეტაპზე.</p>
        </div>
      </div>
    </div>
  );
};

export default Trast;



