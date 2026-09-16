import style from "./whyImDoing.module.css";
import heromanti from "../images/heromanti.webp";

const WhyImDoing = () => {
  return (
    <div>
      <section className={style.whyImDoing}>
        <div className={style.whyImDoingBlocks}>
          <div className={style.whyImDoingImage}>
            <img src={heromanti} alt="Why we are doing this" />
          </div>

          <div className={style.whyImDoingspeach}>
            <h3 className={style.whyDspeach}>
              <span className={style.rich}>რატომ</span> ვაკეთებთ ამას?
            </h3>

            <div className={style.speacheseBlock}>
              <p>
                მე თვითონ გავიარე პროგრამირების რთული გზა
                <br />
                და ვიცი რამდენად დამაბნეველია ყველაფერი
                <br />
                დასაწყისში
                <br />
                <br />
                ამ სივრცის მიზანია სწავლა გახდეს
                <br />
                უფრო გასაგები პრაქტიკული და
                <br />
                რეალურ გამოცდილებაზე დაფუძნებული
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyImDoing;