import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");
  return (
    <section>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </section>
  );
};

export { Contact };
