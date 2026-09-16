import style from "./courses.module.css";
import WideoWrapper from './courdeWideoWrapper';
import  CourseTop from './courseTop';
import  CourseSubblock from './courseSubblock';

import { SiTypescript, SiTailwindcss, SiFigma } from "react-icons/si";
import { Check, CheckCheck, Bird } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import imgr from"../../images/curse.png";
import jimmi from "../../images/list.png";
import compGlass from "../../images/compGlasses.webp";
import { Braces } from "lucide-react";
import {useState} from "react";
import heromanti from "../../images/heromanti.webp";





import {
  Quote,
  Code,
  Laptop,
Clock,
Handshake,
PhoneCall,


} from "lucide-react";



import {
  BookOpen,
  Briefcase,
 Users,
  Badge1,
  Badge2,
  Badge3,
  Badge4




 
 
  
} from "lucide-react";



   const Courses=()=>{

 const [course, setCourse] = useState(null);







  const data = {
   react: {
  title: "React.js საფუძვლები",
  desc:{

en: "React",
ka: "UI ბიბლიოთეკა,"},




  list: [" სწავლის ხანგრძლიობა დაახლოებით 2–3 კვირა ",
    "რა გამოიყენება: Visual Studio Code, Chrome DevTools და სხვა",
    
    " რას ისწავლით:JSX სინტაქსი და როგორ იქმნება UI React-ში",
    "Components არქიტექტურა და კოდის დაყოფა ნაწილებად",
    "Props-ის გამოყენება მონაცემების გადაცემისთვის",
    "State-ის მართვა დინამიკური UI-ისთვის",
    "Event Handling (click, input და სხვა მოვლენები)",
    "React Hooks (useState, useEffect და საბაზისო გამოყენება)",
    "Conditional Rendering და UI ლოგიკა",
    ]
    
    


  
}
,
    js: {
      title: "JavaScript საფუძვლები",
      desc: {en: "JavaScript", ka: "JavaScript არის ვებ დეველოპმენტის ძირითადი ენა, რომელიც საშუალებას გაძლევს შექმნა დინამიური და ინტერაქტიული ვებ გვერდები."},








      list: [  "სწავლების ხანგრძლიობა:დაახლოებით 2 კვირა  (Variables) — მონაცემების შენახვა და მართვა",
    "ფუნქციები (Functions) — კოდის ორგანიზება და reuse",
    "DOM მანიპულაცია — HTML ელემენტების მართვა JavaScript-ით",
    "Events — მომხმარებლის ქმედებებზე რეაგირება (click, input, submit)",
    "Conditional Logic — if/else პირობები რეალური ლოგიკისთვის",
    "Loops — მონაცემების განმეორებითი დამუშავება",
    "Arrays და Objects — მონაცემების სტრუქტურირება",
    "ES6+ სინტაქსი — თანამედროვე JavaScript-ის საფუძვლები"]
    },
    node: {
      title:  "Node.js ",
      desc:{en: "Backend JavaScript",
        
        ka: "არის JavaScript runtime, რომელიც გაძლევს შესაძლებლობას შექმნა სწრაფი და მასშტაბური backend აპლიკაციები JavaScript-ით.Backend JavaScript-ით."},







      list: ["Node.js არქიტექტურა და როგორ მუშაობს backend JavaScript-ით",
    "Server-ის შექმნა (HTTP module)",
    "Express.js framework-ის საფუძვლები",
    "Routing — სხვადასხვა endpoint-ების მართვა",
    "Middleware-ის მუშაობის პრინციპი",
    "REST API შექმნა (GET, POST, PUT, DELETE)",
    "JSON მონაცემებთან მუშაობა",
    "Request / Response ციკლის გაგება"
  ]
    },
    ts: {
      title: "TypeScript ",
      desc:{
en:"TypeScript",
ka:"არის JavaScript-ის გაფართოება, რომელიც ამატებს ტიპების  სისტემას და გეხმარება უფრო უსაფრთხო, სტრუქტურირებული და ნაკლებად შეცდომიანი კოდის წერაში",



      } ,






      list: [  "დიდი frontend აპლიკაციები (React + TS)",
    "Backend სისტემები (Node.js + TS)",
    "Enterprise დონის პროექტები",
    "API response ტიპიზაცია",
    "კოდის უსაფრთხოების გაზრდა production-ში"]
    },
    tailwind: {
      title: "Tailwind CSS ",
      desc:{

en: "Tailwind CSS",
ka: "არის utility-first CSS framework, რომელიც გაძლევს შესაძლებლობას სწრაფად და ეფექტურად ააწყო თანამედროვე UI პირდაპირ HTML/JSX-ში წინასწარი სტილების გარეშე",


      } ,






      list: [ "მოდერნ UI დიზაინი (dashboard, SaaS აპები)",
    "Landing pages",
    "Admin panels",
    "React კომპონენტების სწრაფი სტილიზაცია",
    "პროტოტიპების სწრაფი აწყობა"]
    },
    figma: {
      title: "Figma ",
      desc:{
en: "Figma",
ka: " გამოიყენება ვებ და მობილური აპლიკაციების UI/UX დიზაინის შესაქმნელად."
      },
      list: ["UI/UX საფუძვლები — განსხვავება დიზაინსა და მომხმარებლის გამოცდილებას შორის",
    "Wireframe შექმნა — პროექტის სტრუქტურის დაგეგმვა",
    "Layout & Grid სისტემა — კომპოზიციის სწორად აწყობა",
    "Components — reusable დიზაინის ელემენტები",
    "Auto Layout — responsive დიზაინის პრინციპები",
    "Prototype — კლიკებადი დიზაინის შექმნა",
    "Typography — ტექსტის ვიზუალური იერარქია"],
    
    }
  };


return (
<div>

    <WideoWrapper/>
<CourseTop/>
 <CourseSubblock/>


<section>
<div className={style.courseSection}>

  <div className={style.courseContainer}>

    <div className={style.courseCards}>

      {/* CARD 1 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <FaReact size={30} color="#5ED3F3" className={style.icoiosis} />
          <button className={style.courseCardBtn}>დამწყები</button>
        </div>

        <div className={style.courseCardspeach}>
          <h3>React.js საფუძვლები</h3>
          <p>ისწავლე React-ის ძირითადი კონცეფციები და შექმენი პირველი აპლიკაცია.</p>
        </div>

        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

        <div className={style.courseCardSpan}>

          <span className={style.courseCardSpanOpen}>

 <span onClick={() => setCourse(data.react)}>


              დეტალურად ნახვა 
            </span>



   <span className={style.arrow}> → </span>
  </span>
   
</div>
</div>
    









      {/* CARD 2 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <Braces size={30} color="#0094AF" className={style.icoiosis} />
          <button className={style.courseCardBtn}>დამწყები</button>
        </div>
       

        <div className={style.courseCardspeach}>
          <h3>JavaScript საფუძვლები</h3>
          <p>ისწავლე JavaScript-ის ძირითადი კონცეფციები.</p>
        </div>

        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

          <div className={style.courseCardSpan}>
         <span className={style.courseCardSpanOpen}>

         

 <span onClick={() => setCourse(data.js)}>


              დეტალურად ნახვა 
            </span>




          <span className={style.arrow}> → </span>
  </span>
</div>
     </div>

      {/* CARD 3 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <FaNodeJs size={30} color="#7FC728" className={style.icoiosis} />
          <button className={style.courseCardBtn}>საშუალო</button>
        </div>

        <div className={style.courseCardspeach}>
          <h3>Node.js საფუძვლები</h3>
          <p>ისწავლე Node.js-ის backend კონცეფციები. "ბექენდი"</p>
        </div>


        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

        <div className={style.courseCardSpan}>
         

          <span className={style.courseCardSpanOpen}>

 <span onClick={() => setCourse(data.node)}>


              დეტალურად ნახვა 
            </span>





         <span className={style.arrow}> → </span>
  </span>
</div>

        </div>
      </div>

    </div>
  </div>


 {course && (
        <div className={style.overlaysx} onClick={() => setCourse(null)}>
          <div className={style.modalat} onClick={(e) => e.stopPropagation()}>

            <h3>{course.title}</h3>
           <p className={style.descKa}>
                  {course.desc.ka}
                       </p>




            <ul>
              {course.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className={style.courseCardSpanClosed} onClick={() => setCourse(null)}>
              დახურვა
            </button>

          </div>
        </div>
      )}











  </section>

<section>

<div className={style.courseSection}>

  <div className={style.courseContainer}>

    <div className={style.courseCards}>

      {/* CARD 1 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <SiTypescript size={30} color="#2F74C0" className={style.icoiosis} />
          <button className={style.courseCardBtn}>დამწყები</button>
        </div>

        <div className={style.courseCardspeach}>
          <h3>TypeScript საფუძვლები</h3>
          <p>გაიღრმავე javascript შესაძლებლობები TypeScript გამოენებით  </p>
        </div>

        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

        <div className={style.courseCardSpan}>
         

            
          <span className={style.courseCardSpanOpen}>

 <span onClick={() => setCourse(data.ts)}>


              დეტალურად ნახვა 
            </span>







             <span className={style.arrow}> → </span>
            
            
            
            
            
            
            </span>




        </div>
      </div>

      {/* CARD 2 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <SiTailwindcss size={30} color="#38BDF8" className={style.icoiosis} />
          <button className={style.courseCardBtn}>დამწყები</button>
        </div>

        <div className={style.courseCardspeach}>
          <h3>Tailwind CSS საფუძვლები</h3>
          <p>ისწავლე Tailwind CSS-ის ძირითადი კონცეფციები და ტექნიკური მეთოდები.</p>
        </div>

        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

        <div className={style.courseCardSpan}>
          


          <span className={style.courseCardSpanOpen}>

 <span onClick={() => setCourse(data.tailwind)}>


              დეტალურად ნახვა 
            </span>






             <span className={style.arrow}>  → </span>




            </span>
        </div>
      </div>

      {/* CARD 3 */}
      <div className={style.courseCard}>
        <div className={style.courseCardSubtitle}>
          <SiFigma  size={30} color="#854DF7" className={style.icoiosis} />
          <button className={style.courseCardBtn}>საშუალო</button>
        </div>

        <div className={style.courseCardspeach}>
          <h3>UI/UX დიზაინი figma-ში</h3>
          <p>ისწავლე UI/UX დიზაინის ძირითადი კონცეფციები </p>
        </div>

        <div className={style.courseCardIcons}>
          <div><Briefcase size={18} /><span>8 კვირა</span></div>
          <div><BookOpen size={18} /><span>42 ლექცია</span></div>
          <div><Users size={18} /><span>100+ მომხმარებელი</span></div>
        </div>

        <div className={style.courseCardSpan}>
        


          <span className={style.courseCardSpanOpen}>

 <span onClick={() => setCourse(data.figma)}>


              დეტალურად ნახვა 
            </span>




          <span className={style.arrow}> → </span>


  </span>
</div>

        
      </div>

    </div>
  </div>
</div>


</section>

</div>


)

}

export default Courses;


































































































 















             




 





























































 







































































 



















 





























































 














