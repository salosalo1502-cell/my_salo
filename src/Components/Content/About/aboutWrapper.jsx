
import style from "./aboutWrapper.module.css";
import imagess from "../../../images/containers.png";


const AboutWrapper=()=>{


return(


  
    <section className={style.aboutWrapper}>
      
       


      

      <div className={style.aboutRow}>
        <div className={style.aboutImage}> 
          <img src={imagess} width="300px" alt="about" />
        </div>

        <div className={style.aboutTextBox}>
          <h2 className={style.aboutTextBoxTitle}>ჩვენი მიზანი</h2>



          <p className={style.aboutTextBoxP}>ჩვენი  
            გუნდის მიზანია დავეხმაროთ დამწყებ დეველოპერებს
                იპოვონ სწორი მიმართულება და განივითარონ 
                პრაქტიკული უნარები,</p>



</div>
          
            

    
            



          
       </div>
      </section>








)









}

export default AboutWrapper;