import style from "./mentopWatGat.module.css";

import {
  Users,
  Code,
  Target,
} from "lucide-react";

const MentopWatGat = () => {
  return (
    <div>
      <section className={style.mentopWatGat}>
        <h2 className={style.getSpeach}>
          <span className={style.rich}>რას</span> მიიღებთ?
        </h2>

        <div className={style.watGatWrapper}>
          <div className={style.holdes}>
            <Users size={25} color="#142A97" />

            <h3>პერსონალური დახმარება</h3>

            <p>
              დასვი კითხვები
              რეალურ პრობლემებზე და
              <br />
              მიიღო გასაგები პასუხი
            </p>
          </div>

          <div className={style.holdes}>
            <Code size={25} color="#142A97" />

            <h3>კოდის განხილვა</h3>

            <p>
              ერთად გავივლით შენს კოდს
              <br />
              ვიმუშავებთ მის გაუმჯობესებაზე
            </p>
          </div>

          <div className={style.holdes}>
            <Target size={25} color="#142A97" />

            <h3>პრაქტიკული პროექტები</h3>

            <p>
              იმუშავებ რეალურ პროექტებზე და
              <br />
              არა მხოლოდ თეორიაზე
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentopWatGat;