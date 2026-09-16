
import style from  "./howWork.module.css";
import { motion } from "framer-motion";




const HowWork=()=>{


return(



<motion.div
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >



<div className={style.how_work }>

<h2>როგორ მუშაობს</h2>

<div className={style. how_container}>






  <div className={style.icon_wrapper}>
 
<div className={style.content}>

  <div className={style.columWrapper}>

     <span className={style.spanius}>01</span>
    


 <div className={style.columWrappers}>

<h3>რეგისტრაცია</h3>

  <p>საზოგადოებასთან კავშირი</p>
</div>

</div>

</div>
</div>




  <div className={style.icon_wrapper}>

  
<div className={style.content}>

<div className={style.columWrapper}>

  <span className={style.spanius}>02</span>

<div className={style.columWrappers}>

<h3>პრაქტიკა</h3>

  <p>რეალური გამოცდილება</p>
</div>
</div>
</div>
</div>





<div className={style.icon_wrapper}>
  

  <div className={style.content}>

  <div className={style.columWrapper}>

     <span className={style.spanius}>03</span>

<div className={style.columWrappers}>

<h3>პროექტი</h3>

    <p>თანამედროვე ტექნოლოგიები</p>


</div>
</div>

  </div>

</div>



  <motion.div initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >



</motion.div>




</div>

  </div>








 
  
</motion.div>


 









)





}


export default HowWork;