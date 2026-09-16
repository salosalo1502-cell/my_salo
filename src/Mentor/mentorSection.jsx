import { Check } from "lucide-react";
import { Link } from "react-router-dom";

import style from "./mentorSection.module.css";
import mentorsTeacher from "../images/jamsons.png";

const MentorSection = () => {
  return (
    <div>
      <section className={style.mentorSection}>
        <div className={style.mentors_container}>
          <div className={style.mentorsSpeach}>
            <h2 className={style.mentS}>
              <span className={style.rich}>მენტორის</span> დახმარება
            </h2>

            <div className={style.speed}>
              <div className={style.lineInc}>
                <div className={style.line}></div>
                ერთად განვიხილავთ პრობლემებს,
                <br />
              </div>

              <div className={style.lineInc}>
                <div className={style.line}></div>
                გავასწორებთ შეცდომებს
                <br />
              </div>

              <div className={style.lineInc}>
                <div className={style.line}></div>
                რეალურ პროექტებზე ვიმუშავებთ.
              </div>
            </div>

            <div className={style.holdsContainer}>
              <div className={style.holds}>
                <Check size={15} />
                <p>კოდის ახსნა და გაუმჯობესება</p>
              </div>

              <div className={style.holds}>
                <Check size={15} />
                <p>შეცდომების გასწორება</p>
              </div>

              <div className={style.holds}>
                <Check size={15} />
                <p>პროექტების აწყობა</p>
              </div>

              <div className={style.holds}>
                <Check size={15} />
                <p>სწორი გზის შერჩევა</p>
              </div>

              <div className={style.holds}>
                <Check size={15} />
                <p>პრაქტიკული გამოცდილების მიღება</p>
              </div>
            </div>

            <div className={style.buttonsSt}>
              <Link to="/register" className={style.bortOne}>
                კურსზე ჩაწერა
              </Link>

              <Link to="/contaqt" className={style.bortTwo}>
                კონტაქტი
              </Link>
            </div>
          </div>

          <div className={style.mentorsImages}>
            <img src={mentorsTeacher} alt="Mentor" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorSection;