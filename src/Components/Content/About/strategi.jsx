import style from './strategi.module.css';

import {
  
  
Clock,

PhoneCall,
BookOpen,
  Users 



} from "lucide-react";








const Strategi =()=>{

return(



<div className={style. ecoSistems}>
<div className={style.ecoSistems_container}>


  <div className={style.srtategi}>
<h2> ჩვენი ხედვა</h2>

<p>შევქმნათ ტექნიკური განათლების<br/>
ეკო სისტემა, რომელიც შეცვლის<br/> 

მრავალი ადამიანის ცხოვრებას

</p>

</div>


  <div className={style. ecos_clinner}>
<div className={style.conten}></div>
 <Users size={20} className={style.iconi} />
<h3>5000+</h3>
<p>აქტიური სტუდენტი </p>
</div>


<div className={style. ecos_clinner}>
<div className={style.conten}></div>
 < BookOpen size={20} className={style.iconi} />
<h3>200+</h3>
<p>კურსი პროექტი</p>

</div>
<div className={style. ecos_clinner}>
<div className={style.conten}></div>
 <Clock size={20} className={style.iconi} />
<h3>98%</h3>
<p>კოეფიციენტის რეიტინგი </p>
</div>


<div className={style. ecos_clinner}>
<div className={style.conten}></div>
 <PhoneCall size={20} className={style.iconi} />
<h3>24/7</h3>
<p>მარდაჭერა </p>

</div>




</div>

</div>












)






}

export default Strategi;