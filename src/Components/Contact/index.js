import React, { useReducer } from "react";
import { initialState, reducer } from "../../hooks/useFormFiller";
import { FormSection, Form, FormInput, FormTextarea, FormButton } from '../../styled-components/ContactElements'

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
          value={state.name}
          onChange={(e) => dispatch(
            {
              type: "update_input",
              key: "name",
              value: e.target.value
            }
          )}
        />
        <FormInput
          type="email"
          id="email"
          name="email"
          required
          placeholder="email"
          value={state.email}
          onChange={(e) => dispatch(
            {
              type: "update_input",
              key: "email",
              value: e.target.value
            }
          )}
        />
        <FormTextarea
          className="form-section__form-input--message"
          id="message"
          name="message"
          rows={5}
          cols={5}
          required
          placeholder="Write your message"
          value={state.message}
          onChange={(e) => dispatch(
            {
              type: "update_input",
              key: "message",
              value: e.target.value
            }
          )}
        />
      </Form>
      <FormButton>Submit</FormButton>
    </FormSection>

  );
};

export { Contact };
