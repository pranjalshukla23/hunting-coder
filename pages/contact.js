import styles from "../styles/Contact.module.css";
import { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:3000/api/postcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          desc,
        }),
      });

      await data.json();

      alert("thank you for contacting us");

      setName("");
      setEmail("");
      setPhone("");
      setDesc("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact us</title>
      </Head>
      <h1>Contact us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="phone"
            className={styles.input}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Enter your message
          </label>
          <br />
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            rows={10}
            cols={50}
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;