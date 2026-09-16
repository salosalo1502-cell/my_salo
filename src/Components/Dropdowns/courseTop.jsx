import style from './courseTop.module.css';
import programmingx from "../../images/programmingx.png"
import programingius from "../../images/programingius.png";
import programmerC from "../../images/programmerC.png";




const CourseTop=()=>{

return(

<div>


    {/* COURSES */}
    <section>

      <div className={style.course_top}>
        <div className={style.course_container}>
<div className={style.course_topSpeach}>
<h2>თეორიიდან რეალურ პროექტებამდე</h2>
<div className={style.inlineStress}></div>




<p>ისწავლე თანამედროვე ტექნოლოგიები
   პრაქტიკული დავალებებითა და რეალური გამოცდილებით.</p>
 </div>














       

<div className={style.rosanaBox}>


<img src={programingius} alt="images" />

<img src={programmerC} alt="images" />
<img src={ programmingx} alt="images" />


</div>

</div>

      </div>

</section>










</div>







)






}


export default CourseTop;
