import React, { useState } from "react";
import { FormSection, FormWrapper, Form, FormLabel, FormInput, FormTextarea, FormButton } from '../../styled-components/ContactElements'

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormSection id="contact">
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="email"
          id="email"
          name="email"
          required
          placeholder="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <FormTextarea
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
      </Form>
      <FormButton>Submit</FormButton>
    </FormSection>

  );
};

export { Contact };
