import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
 





      <div className={style.footer_container}>

        {/* კონტაქტი */}
        <div className={style.footer_section}>
          <h3>კონტაქტი</h3>
          <p>ელფოსტა: salosalo1502@gmail.com</p>
          <p>ტელეფონი: +995 599805560</p>
          <p>თბილისი, საქართველო</p>
        </div>

        {/* ნავიგაცია */}
        <div className={style.footer_section}>
          <h3>ნავიგაცია</h3>
          <ul>
            <li>მთავარი</li>
            <li>კურსები</li>
            <li>ჩვენ შესახებ</li>
            <li>კონტაქტი</li>
          </ul>
        </div>

        {/* ჩვენს შესახებ */}
        <div className={style.footer_section}>
          <h3>ჩვენ შესახებ</h3>
          <p>
            ჩვენ გეხმარებით ნულიდან გახდეთ პროფესიონალი პროგრამისტი.
            შეისწავლეთ თანამედროვე ტექნოლოგიები და შექმენით რეალური პროექტები.
          </p>
        </div>

      </div>

      <div className={style.footer_bottom}>
        <p>© 2026 container. All rights reserved.</p>

        <div className={style.socials}>
          <a href="#" className={style.facebook}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={style.twitter}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={style.linkedin}>
            <i className="fab fa-linkedin-in" ></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

