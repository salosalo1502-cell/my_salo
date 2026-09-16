import style from './content.module.css';
import image from "../../images/my.webp";
import { useReveal } from "../../Reveal/useReveal";

const Content = () => {

  const [ref, visible] = useReveal();

  return ( 
    <div
      ref={ref}
      className={`${style.section} ${visible ? style.show : ""}`}
    >

      <div className={style.Content}>
        <div className={style.container}>

          <div className={style.overlay}>

            <div className={style.content_image}>
              <img src={image} alt="Programming courses" />
            </div>

            <div className={style.content_speach}>
              <h1 className={style.hig_speach}>CONTAINER</h1>

              <h3 className={style.content_teach}>
                ისწავლე პროგრამირება ნულიდან
              </h3>

              <h2 className={style.content_programs}>
               html.css . javascript. React. node.js
              </h2>

             
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Content;