
import style from './studentPortfolios.module.css';
import elene from "../../images/elene.webp";
import  fashionD from "../../images/fashionDesk.png";
import fashionM from "../../images/fashionMobile.png";
import { useState } from "react";
import  giorgi from "../../images/giorgi.webp";
import intMagazin from "../../images/intMagazin.png";
import mobinter from "../../images/mobileEnternet.png"
import travel from "../../images/travel.png";
import turizm from "../../images/turizm.png";
import kato from "../../images/kato.webp";
import  varlami from "../../images/varlami.webp";
import sofeliDesktop from "../../images/sofeliDesktop.png";
import sofeliMobile from "../../images/sofeliMobile.png";


export default function Portfolio() {

  const [active, setActive] = useState(null);

  const students = [

    {
      id: 1,
      name: "ელენე გიორგაძე",
      age: 24,
      joined: "2025-03-10",
      timeToBuild: "2 კვირა",
      category: "მოდის ვებსაიტი",
      desc: "თანამედროვე და responsive დიზაინი",

      stack: ["HTML", "CSS", "React"],

      img: elene,
      imgDesk: fashionD,
      imgMobile: fashionM,

      problem: "არ ჰქონდა პროექტების აწყობის გამოცდილება",

      solution: "კომპონენტებზე დაფუძნებული responsive სტრუქტურა",

      result: "პირველი სრულყოფილი პორტფოლიო საიტი",
    },

    {
      id: 2,
      name: "ლევანი მჭედლიძე",
      age: 45,
      joined: "2025-02-01",
      timeToBuild: "3 კვირა",
      category: "ონლაინ მაღაზია",

      desc: "ელეგანტური ინტერნეტ მაღაზიის დიზაინი",

      stack: ["HTML", "CSS", "React", "Node.js"],

      img:   giorgi  ,

      imgDesk: intMagazin,

      imgMobile: mobinter,

      problem: "ვერ აწყობდა გაყიდვების სისტემას",

      solution: "კალათის ლოგიკა და backend სტრუქტურა",

      result: "მუშა ონლაინ მაღაზიის პროტოტიპი",
    },

    {
      id: 3,
      name: "თამარ ბერიძე",
      age: 27,
      joined: "2025-04-05",
      timeToBuild: "10 დღე",
      category: "ტურიზმი",

      desc: "ტურიზმის ბიზნესის თანამედროვე პლატფორმა",

      stack: ["React", "CSS", "Firebase"],

      img:kato,

      imgDesk:travel ,

      imgMobile:turizm ,

      problem: "არ იცოდა responsive დიზაინის აწყობა",

      solution: "მობილურ მოწყობილობებზე მორგებული UI",

      result: "სრული ტურიზმის პლატფორმის დიზაინი",
    },

    {
      id: 4,
      name: "ბ_ნი ვარლამი",
      age: 62,
      joined: "2025-01-15",
      timeToBuild: "1 თვე",
      category: "სოფლის მეურნეობა",

      desc: "საიტის ფუნქციონალური ვებგვერდი",

      stack: ["React", "Node.js", "MongoDB"],

      img: varlami,

      imgDesk:sofeliDesktop ,

      imgMobile: sofeliMobile,

      problem: "ვერ ქმნიდა სრულფასოვან backend სისტემას",

      solution: "API და მონაცემთა ბაზის ინტეგრაცია",

      result: "ააწყო სრული ქუნქციონალური საიტი",
    },

  ];

  return (

    <section className={style.wrapper}>

      {/* HEADER */}
      <div className={style.header}>

        <h1> მოსწავლეების წარმატებული პროექტები</h1>

        <p>
          პროგრამირება ასაკს არ ცნობს — განვითარებას საზღვარი არ აქვს
        </p>

      </div>

      {/* GRID */}
      <div className={style.grid}>

        {students.map((s) => (

          <div
            key={s.id}
            className={style.card}
            onClick={() => setActive(s)}
          >

            {/* AVATAR */}
            <img
              src={s.img}
              alt={s.name}
              className={style.avatar}
            />

            {/* CONTENT */}
            <div className={style.content}>

              <h3>{s.name}</h3>

              <p className={style.small}>
                {s.age} წლის • შემოუერთდა {s.joined}
              </p>

              <span className={style.badge}>
                {s.category}
              </span>

              <p className={style.desc}>
                {s.desc}
              </p>

              <p className={style.meta}>
                ⏱ დასრულების დრო: {s.timeToBuild}
              </p>

              <button className={style.btn}>
                პროექტის ნახვა →
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}
      {active && (

        <div
          className={style.overlay}
          onClick={() => setActive(null)}
        >

          <div
            className={style.modal}
            onClick={(e) => e.stopPropagation()}
          >

            <h2>{active.name}</h2>

            <img
              src={active.img}
              className={style.modalAvatar}
            />

            <p>
              <b>პრობლემა:</b> {active.problem}
            </p>

            <p>
              <b>გადაწყვეტა:</b> {active.solution}
            </p>

            <p>
              <b>შედეგი:</b> {active.result}
            </p>

            {/* MOCKUPS */}
            <div className={style.images}>

              {/* LAPTOP */}
              <div className={style.laptopMockup}>

                <div className={style.laptopTop}>

                  <img
                    src={active.imgDesk}
                    alt="desktop"
                    className={style.desktopImg}
                  />

                </div>

                <div className={style.laptopBottom}></div>

              </div>

              {/* PHONE */}
              <div className={style.phoneMockup}>

                <div className={style.phoneTop}></div>

                <img
                  src={active.imgMobile}
                  alt="mobile"
                  className={style.mobileImg}
                />

              </div>

            </div>

            {/* STACK */}
            <div className={style.stack}>

              {active.stack.map((t, i) => (

                <span key={i}>
                  {t}
                </span>

              ))}

            </div>


            <button onClick={() => setActive(null)}>
              დახურვა
            </button>

          </div>




        </div>



)}

      

    </section>






  );
}

