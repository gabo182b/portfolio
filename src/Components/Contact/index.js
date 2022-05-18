import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="form-section">
      <form className="form-section__form" onSubmit={handleSubmit}>
        <label className="form-section__form-label" htmlFor="name">
          Name
        </label>
        <input
          className="form-section__form-input--name"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-section__form-label" htmlFor="email">
          email
        </label>
        <input
          className="form-section__form-input--mail"
          type="text"
          id="email"
          name="email"
          required
          placeholder="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label className="form-section__form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-section__form-input--message"
          id="message"
          name="message"
          rows={5}
          cols={5}
          required
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button className="form-section__submit-btn">Submit</button>
    </section>
  );
};

export { Contact };
