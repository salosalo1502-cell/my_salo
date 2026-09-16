
import { useState } from "react";

import { MapPinned, Mail, PhoneCall } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";

import style from "./contaqt.module.css";
import myDesk from "../images/containers.png";

const Contaqt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("ყველა ველი აუცილებელია");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setError("არასწორი ელფოსტის ფორმატი");
      return;
    }

    if (message.length < 10) {
      setError("შეტყობინება ძალიან მოკლეა (მინ. 10 სიმბოლო)");
      return;
    }

    try {
      setLoading(true);

      const sendMail = await fetch(
        "http://localhost:5000/api/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await sendMail.json();

      if (!sendMail.ok) {
        throw new Error(data.message || "Error sending message");
      }

      setSuccess("შეტყობინება წარმატებით გაიგზავნა 🎉");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setError("გაგზავნა ვერ მოხერხდა ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={style.logteqContainer}>
        <div className={style.logtImage}>
          <img src={myDesk} alt="image" />
        </div>
      </div>

      <section className={style.contaqtsContainer}>
        <div className={style.contaqtsForm}>
          <form
            className={style.contactForm}
            onSubmit={handleSubmit}
          >
            <h2>დაგვიკავშირდი</h2>

            <input
              type="text"
              placeholder="სახელი"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="ელფოსტა"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="შეტყობინება"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {error && (
              <p style={{ color: "red" }}>
                {error}
              </p>
            )}

            {success && (
              <p style={{ color: "green" }}>
                {success}
              </p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "იგზავნება..." : "გაგზავნა"}
            </button>
          </form>
        </div>

        <div className={style.contaqtsCorespond}>
          <div className={style.holdest}>
            <Mail
              size={30}
              color="#60A5FA"
              className={style.iconarx}
            />

            <div className={style.rulone}>
              <p className={style.rouP}>Email</p>
              <p className={style.rouS}>
                salosalo1502@gmail.com
              </p>
              <p className={style.rouS}>
                პასუხი 24 საათში
              </p>
            </div>
          </div>

          <div className={style.holdest}>
            <PhoneCall
              size={30}
              color="#60A5FA"
              className={style.iconarx}
            />

            <div className={style.rulone}>
              <p className={style.rouP}>Phone/WhatsApp</p>
              <p className={style.rouS}>
                +995 599 80 55 60
              </p>
              <p className={style.rouS}>
                ორშაბათი - შაბათი 10:00-20:00
              </p>
            </div>
          </div>

          <div className={style.holdest}>
            <MapPinned
              size={30}
              color="#60A5FA"
              className={style.iconarx}
            />

            <div className={style.rulone}>
              <p className={style.rouP}>მისამართი</p>
              <p className={style.rouS}>
                დ.გამრეკელის 2
              </p>
              <p className={style.rouS}>
                (შეხვედრა წინასწარ შეთანხმებით)
              </p>
            </div>
          </div>

          <div className={style.holdest}>
            <div className={style.rulones}>
              <div className={style.rsur}>
                <FaFacebook
                  size={30}
                  color="#60A5FA"
                  className={style.iconarxo}
                />

                <FaGithub
                  size={30}
                  color="#60A5FA"
                  className={style.iconarxo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contaqt;