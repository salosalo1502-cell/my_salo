import { useState } from "react";

import style from "./portfolio.module.css";

export default function Portfolio() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Education Platform",
      category: "Web App",
      desc: "სასწავლო პლატფორმის კონცეფცია დამწყებთათვის",
      problem: "დამწყებებს უჭირთ სწორი მიმართულების პოვნა",
      solution: "სტრუქტურირებული სწავლა React + Node.js ლოგიკით",
      result: "დამწყები → პრაქტიკული დეველოპერის გზა",
    },
    {
      id: 2,
      title: "Landing Page",
      category: "UI/UX",
      desc: "მაღალი კონვერსიის ლენდინგის კონცეფცია",
      problem: "ვიზიტორი ვერ იგებს ღირებულებას",
      solution: "სუფთა დიზაინი + სწორი იერარქია",
      result: "ვიზიტორი → დაინტერესებული მომხმარებელი",
    },
    {
      id: 3,
      title: "Auth System",
      category: "Backend",
      desc: "უსაფრთხო ავტორიზაციის სისტემა",
      problem: "მონაცემების უსაფრთხოება",
      solution: "JWT + validation architecture",
      result: "დაცული და scalable სისტემა",
    },
  ];

  return (
    <section className={style.Portfolio_wrapper}>
      <div className={style.Portfolio_header}>
        <h2>STUDENT SUCCESS PROJECTS</h2>
        <p>
          კონცეფცია, რომელიც გვიჩვენებს, თუ როგორ იქმნება და ისწავლება
          ჩვენი სტუდენტების მიერ
        </p>
      </div>

      <div className={style.Portfolio_cards}>
        {projects.map((p) => (
          <div
            key={p.id}
            className={style.Portfolio_card}
            onClick={() => setActive(p)}
          >
            <span className={style.category}>{p.category}</span>

            <h3 className={style.title}>{p.title}</h3>

            <p className={style.desc}>{p.desc}</p>

            <span className={style.link}>ნახვა →</span>
          </div>
        ))}
      </div>

      {active && (
        <div
          className={style.Portfolio_overlay}
          onClick={() => setActive(null)}
        >
          <div
            className={style.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{active.title}</h2>

            <div className={style.block}>
              <h4>პრობლემა</h4>
              <p>{active.problem}</p>
            </div>

            <div className={style.block}>
              <h4>⚙️ გადაწყვეტა</h4>
              <p>{active.solution}</p>
            </div>

            <div className={style.block}>
              <h4>📈 შედეგი</h4>
              <p>{active.result}</p>
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