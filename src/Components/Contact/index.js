import React, { useState } from "react";
import { FormSection, FormWrapper, Form, FormLabel, FormInput, FormTextarea, FormButton } from './ContactElements'

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormSection id="contact">
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel htmlFor="email">email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            required
            placeholder="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <FormLabel htmlFor="message">Message</FormLabel>
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
      </FormWrapper>
    </FormSection>

  );
};

export { Contact };
