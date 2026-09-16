import style from "./mentHowWork.module.css";

import {
  Mail,
  Users,
  Laptop,
} from "lucide-react";

const HowWork = () => {
  return (
    <div>
      <section className={style.mentHowWork}>
        <h2 className={style.getSpeach}>
          <span className={style.rich}>როგორ</span> მუშაობს?
        </h2>

        <div className={style.HowGatWrapper}>
          <div className={style.holdes}>
            <Mail size={25} color="#142A97" />
            <h3>მომწერე პრობლემა</h3>
            <p>
              აირჩიე პრობლემური თემა
              <br />
              და გამომიგზავნე
            </p>
          </div>

          <div className={style.holdes}>
            <Users size={25} color="#142A97" />
            <h3>ერთად განვიხილავთ</h3>
            <p>
              გავივლით საკითხს
              <br />
              მარტივად და პრაქტიკულად
            </p>
          </div>

          <div className={style.holdes}>
            <Laptop size={25} color="#142A97" />
            <h3>მიიღებ დავალებებს</h3>
            <p>
              იმისათვის რომ ცოდნაა
              <br />
              რეალიზებამდე მიიყვანო
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWork;