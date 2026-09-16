
import style from "./whyBilding.module.css";

import problem from "../../../images/cre.webp";
import { motion } from "framer-motion";
import problematic from "../../../images/lomotid.webp";
import problematicios from "../../../images/ira.webp";



const WhyBilding=()=>{

return(





<section section className={style. whyBildung}>
<h2 className={style.nemo}>რატომ დავიწყეთ</h2>

<motion.div
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >












 

<div className={style.problems_speach}>
 <div className={style.problemRight}>

  <h2>პრობლემა</h2>
<p>ჩვენ დავიწყეთ იმიტომ, რომ თანამედროვე ტექნოლოგიების ,



  სამყაროში სწავლის სურვილი ,ბევრ ადამიანს აქვს,
   მაგრამ
   სწორ გზაზე დადგომა ,ხშირად რთულია
    უამრავი ინფორმაცია
    არსებობს, თუმცა დამწყებისთვის, რთულია
     გაარჩიოს რა არის, მნიშვნელოვანი,
     საიდან უნდა დაიწყოს და
      როგორ ,განვითარდეს ეტაპობრივად.

 </p>

</div>

<div className={style.problems_image}>

 <img src={problem} alt="images"></img>
</div>




</div>

</motion.div>



<motion.div
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >




<div className={style.problems_speach}>
  <div className={style.problemLeft}>

   


<img src={problematic} alt="images"></img>
</div>





 <div className={style.problemRight}>
<h2>მიზანი</h2>

<p>
ჩვენი მიზანი გახდა ისეთი სივრცის შექმნა, სადაც 
სწავლა იქნება გასაგები, პრაქტიკული და რეალურ შედეგზე 
ორიენტირებული. გვინდოდა შეგვექმნა გარემო, სადაც ნებისმიერი ასაკისა
 და გამოცდილების ადამიანს ექნება შესაძლებლობა ისწავლოს პროგრამირება 
 თანამედროვე მეთოდებით, მიიღოს პრაქტიკული გამოცდილება და საკუთარ
  შესაძლებლობებში მეტი თავდაჯერებულობა იგრძნოს.

 </p>

</div>
</div>
</motion.div>





<motion.div
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
  viewport={{ once: true, amount: 0.4 }}
    >



<div className={style.problems_speach}>


 



 <div className={style.problemRight}>

  <h2>მოტივაცია</h2>
 
<p>
ამ პროექტის შექმნის მთავარი მოტივაცია იყო ცოდნის
 გაზიარება, ტექნოლოგიების ხელმისაწვდომობა და იმ
  ადამიანების მხარდაჭერა, რომლებიც საკუთარი მომავლის 
  შეცვლას ცდილობენ. ჩვენ გვჯერა, რომ სწორი განათლება
   ადამიანს აძლევს შესაძლებლობას შექმნას უკეთესი კარიერა, 
   ახალი შესაძლებლობები და უფრო ძლიერი მომავალი.

 </p>

</div>

<div className={style.problemLeft}>

<img src={problematicios} alt="images"></img>
</div>



</div>

 


</motion.div>
</section>






 











)







}


export default WhyBilding;