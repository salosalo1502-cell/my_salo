import style from "./myWay.module.css";
import imigiaso from "../../../images/salo.jpg";
import {
  Quote,
 



} from "lucide-react";



const MyWay=()=>{

return(


<section>

<div className={style. myWay}>

<div className={style. myWay_image}>

<img src={imigiaso} width="120px"height="120px" alt="images"></img>




</div>




<div className={style.myWay_speach}>
<div className={style.contentos}>
  < Quote size={15} className={style.iconosos} />
<h3>ჩემი გზა, ჩვენი მისია</h3>
  <p className={style. whySo}>ტექნოლოგიები ჩემი ცხოვრების განუყოფელი ნაწილია.<br/>
  ამ პლატფორმის შექმნა იყო პასუხი იმაზე<br/>
  თუ რაოდენ დაბრკოლებებს განვიცდიდი სწავლების პროცესში,<br/>
  სწორი მიმართულებისა და პრაქტიკის უქონლობის გამო.<br/>
  ჩემი მიზანია ეს გზა თქვენთვის უფრო მარტივი და ნათელი გავხადო
  
  </p>

  <p className={style.signature}>i.salukvadze</p>

</div>



</div>






</div>










</section>









)





}

export default MyWay;