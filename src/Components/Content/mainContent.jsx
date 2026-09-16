
import { motion } from "framer-motion";
import style from "./mainContent.module.css";
import image from "../../images/sanats.png";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <div className={style.inner_main}>
      <div className={style.text_block}>
        <div className={style.text_inner}>
          <h2>დღეს პროგრამისტებზე მოთხოვნა</h2>
          <h2>რეკორდულად მაღალია</h2>
          <p>მაგრამ წარმატებას აღწევს ის, ვინც სწორ გზას ირჩევს.</p>
        </div>

        <div className={style.cta_group}>
          <button
            className={style.cta}
            onClick={() => navigate("/register")}
          >
            რეგისტრაცია
          </button>

            <button
            className={style.cta_secondary}
            onClick={() => navigate("/courses")}
          >
            კურსების ნახვა
          </button>





          



        </div>
      </div>

      <div className={style.image_block}>
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};

export default MainContent;