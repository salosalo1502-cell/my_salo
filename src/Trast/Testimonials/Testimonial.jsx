

import { useState } from "react";
import { motion } from "framer-motion";

import style from "./testimonial.module.css";

import imageso from "../../images/compLite.webp";
import nika from "../../images/giorgi.webp";
import ana from "../../images/elene.webp";
import giorgi from "../../images/varlami.webp";
import ima from "../../images/prgramWoman.webp";
import imagesos from "../../images/likegirl.webp";

export default function TestimonialsChat() {
  const messages = [
    {
      id: 1,
      name: "ნიკა",
      avatar: nika,
      text: "აუ მართლა მაგარია 😄 თავიდან ვერ ვიჯერებდი ასე მარტივად თუ ვისწავლიდი",
      time: "ახლახანს",
      side: "left",
    },
    {
      id: 2,
      name: "ანა",
      avatar: ana,
      text: "ხოო მეც ეგრე ვარ 😄 CSS თავიდან მეშინოდა და ახლა უკვე ვაკეთებ დიზაინებს",
      time: "1 წთ წინ",
      side: "right",
    },
    {
      id: 3,
      name: "გიორგი",
      avatar: giorgi,
      text: "პირველი პატარა პროექტიც ავაწყე უკვე, ცოტა bug-ებიც მქონდა მაგრამ გავასწორე 🔥",
      time: "2 წთ წინ",
      side: "left",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};

    if (!formData.name.trim()) {
      err.name = "შეიყვანე სახელი";
    }

    if (!formData.email.trim()) {
      err.email = "შეიყვანე იმეილი";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = "არასწორი იმეილი";
    }

    if (!formData.message.trim()) {
      err.message = "შეიყვანე ტექსტი";
    }

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "http://localhost:5000/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className={style.TestimonialsChat_wrapper}>
      <div className={style.imageso_wrapper}>
        <div className={style.header}>
          <h2>სტუდენტების რეალური გამოცდილება</h2>
          <p>რას ამბობენ ისინი ვინც უკვე სწავლობს</p>
        </div>

        <div className={style.header_imagesoebi}>
          <div className={style.imageso}>
            <div className={style.Toverlay}></div>
            <img src={imageso} alt="Student experience" />
          </div>

          <div className={style.header_imaAmma}>
            <div className={style.ima}>
              <div className={style.Toverlay}></div>
              <img src={ima} alt="Student experience" />
            </div>

            <div className={style.imagesos}>
              <div className={style.Toverlay}></div>
              <img src={imagesos} alt="Student experience" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.mainGrid}>
        {/* Chat */}

        <div className={style.chatBox}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${style.message} ${
                msg.side === "right" ? style.right : style.left
              }`}
            >
              <img src={msg.avatar} alt={msg.name} />

              <div className={style.bubble}>
                <span className={style.name}>{msg.name}</span>
                <p>{msg.text}</p>
                <span className={style.time}>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}

        <div className={style.formBox}>
          <h3>მოგვწერე</h3>

          <form
            className={style.saloMessage}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="სახელი"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <p className={style.error}>{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="ელ.ფოსტა"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className={style.error}>{errors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="შეტყობინება..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />

            {errors.message && (
              <p className={style.error}>{errors.message}</p>
            )}

            <button
              className={style.barsa}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "იგზავნება..." : "გაგზავნა"}
            </button>

            {status === "success" && (
              <p className={style.success}>გაგზავნილია ✅</p>
            )}

            {status === "error" && (
              <p className={style.error}>
                გთხოვ სწორად შეავსე ფორმა
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

