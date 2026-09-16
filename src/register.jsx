import style from "./registr.module.css";
import { useState } from "react";
import mySalo from "./images/containers.png";


const Registr = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseName, setCourseName] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9+]{9,15}$/;
    return regex.test(phone);
  };

  const validateField = (field, value) => {
    let error = "";

    if (field === "name" && !value) error = "მიუთითეთ სახელი";

    if (field === "email") {
      if (!value) error = "ველი ცარიელია";
      else if (!validateEmail(value)) error = "არასწორი ემაილ ფორმა";
    }

    if (field === "phone") {
      if (!value) error = "ველი ცარიელია";
      else if (!validatePhone(value)) error = "არასწორი ნომერი";
    }

    if (field === "courseName" && !value) error = "ველი ცარიელია";

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      phone: validateField("phone", phone),
      courseName: validateField("courseName", courseName),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    const formData = { name, email, phone, courseName };

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Server error");
      }

      console.log("SERVER RESPONSE:", data);

      setSuccess(data.message);

      setName("");
      setEmail("");
      setPhone("");
      setCourseName("");
      setErrors({});
    } catch (error) {
      console.log("ERROR:", error.message);
      setSuccess("");
    }
  };

  return (
    <div>
      <section className={style.registr}>




        <div className={style.registrContainer}>


<div className={style.logtImage}>

<img src={mySalo}  alt="image"></img>


</div>


          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="სახელი"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  name: validateField("name", e.target.value),
                }));
              }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  email: validateField("email", e.target.value),
                }));
              }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <input
              type="tel"
              placeholder="მობ.ტელეფონი"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  phone: validateField("phone", e.target.value),
                }));
              }}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

            <input
              type="text"
              placeholder="კურსის დასახელება"
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  courseName: validateField("courseName", e.target.value),
                }));
              }}
            />
            {errors.courseName && (
              <p style={{ color: "red" }}>{errors.courseName}</p>
            )}

            <button className={style.salosBtn} type="submit">რეგისტრაცია</button>

            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Registr;