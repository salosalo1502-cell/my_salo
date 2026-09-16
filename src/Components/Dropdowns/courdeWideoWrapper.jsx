import video from  "../../Wideos/curses head video.mp4";
import style from './courseWideoWrapper.module.css';

const WideoWrapper=()=>{


return(
<div>

    {/* HERO */}
    <section>
      <div className={style.videoWrapper}>

        <video autoPlay loop muted playsInline className={style.bgVideo}>
          <source src={video} type="video/mp4" />
        </video>

        <div className={style.overlay}></div>

        <div className={style.content}>
          <h1>ისწავლე პროგრამირება</h1>
          <p>Frontend • Backend • Full Stack</p>
          <button className={style.fr_btn}>დაწყება</button>
        </div>

      </div>


    </section>



</div>




)





}

export default WideoWrapper;