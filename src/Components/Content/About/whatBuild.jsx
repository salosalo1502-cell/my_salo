import style from './whatBuild.module.css';
import { motion } from "framer-motion";

import {
 BookOpen,

  Briefcase,

   Users 
 
  



 
 
  
} from "lucide-react";




const WatBuild=()=>{


return(


<div>
<motion.div
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >


<section className={style.buildest_herro}>

<h2 className={style.build}>რას ვაშენებთ?</h2>

<p>ჩვენ ვაშენებთ თანამედროვე საგანმანათლებლო პლატფორმას</p>

</section>

</motion.div>









<div className={style.what_build}>
<div className={style.build_container}>

  



<div className={style.first}>
<div className={style.build_style}>


<h3>კურსები</h3>





<div className={style.icons}>
  <BookOpen size={30}className={style.icon} />

<p>თანამედროვე ტექნოლოგიები</p>
</div>
</div>



<div className={style.build_style}>
<h3>დავალებები</h3>




<div className={style.icons}>
  <Briefcase size={30} className={style.icon} />

<p>განავითარე რეალური უნარები</p>

</div>
</div>








</div>





<div className={style.second}>

<div className={style.build_style}>

<h3>პორტფოლიო</h3>






<div className={style.icons}>
  <Briefcase size={30} className={style.icon} /> 

<p>შექმენი შენი პორტფოლიოს სტილი </p>

</div>
</div>



<div className={style.build_style}>
<h3>საზოგადოება</h3>



<div className={style.icons}>
  <Users size={30} className={style.icon} />

<p>შემოუერთდი ჩვენს საზოგადოებას</p>
</div>

</div>

</div>



<div className={style.tree}>

<div className={style.build_style}>

<h3> მხარდაჭერა</h3>






<div className={style.icons}>
  <Briefcase size={30} className={style.icon} /> 

<p>დასაქმება-მოწყობა- რეკომენდაცია </p>

</div>
</div>



<div className={style.build_style}>
<h3>განვითარება</h3>



<div className={style.icons}>
  <Users size={30} className={style.icon} />

<p>IT-სფეროში გაცნობა ინტეგრაცია</p>
</div>

</div>

</div>










</div>
</div>





</div>


)







}


export default WatBuild;