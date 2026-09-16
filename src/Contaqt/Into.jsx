import { useEffect, useState } from "react";



import style from "./into.module.css";
import logo from "../images/containers.png"





export default function Into({ onFinish }) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStart(true), 400);   
    const t2 = setTimeout(() => setExit(true), 2200);  
    const t3 = setTimeout(() => onFinish?.(), 3000);    

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (

   <div className={`${style.into} ${exit ? style.exit : ""}`}>
  <div className={style.bg} />

  <div className={`${style.logoWrap} ${start ? style.show : ""}`}>
    <img src={logo} alt="Container logo" />
  </div>

  <p className={style.copyright}>
    © 2026 Container. All rights reserved.
  </p>
</div>
  )
}