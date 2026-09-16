import { motion } from "framer-motion";

import style from "./stup.module.css";
import imagesss from "../images/salo.jpg";
import WomanComp from "../images/womComp.jpg";
import menComp from "../images/menComp.webp";

export default function TeamCards() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
    >
      <section className={style.wrapper}>
        <div className={style.sectionHeader}>
          <h2 className={style.title}>
            <span>Team</span> Leaders
          </h2>
        </div>

        <div className={style.grid}>
          <div className={style.card}>
            <div className={style.front}>
              <img src={imagesss} alt="ირაკლი სალუქვაძე" />
              <h3>ირაკლი სალუქვაძე</h3>
            </div>

            <div className={style.back}>
              <h4>MANAGER</h4>
              <h4>container დამფუძნებელი</h4>
              <p>React • UI/UX</p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.front}>
              <img src={WomanComp} alt="ანა ქავთარაძე" />
              <h3>ანა ქავთარაძე</h3>
            </div>

            <div className={style.back}>
              <h4>UI Designer</h4>
              <p>Figma • Design Systems</p>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.front}>
              <img src={menComp} alt="გიორგი ლომიძე" />
              <h3>გიორგი ლომიძე</h3>
            </div>

            <div className={style.back}>
              <h4>Backend Developer</h4>
              <p>Node.js • API • DB</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}