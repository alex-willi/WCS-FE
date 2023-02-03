import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log("this", PUBLIC_KEY);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    form.reset();
  };

  return (
    <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="name"
          name="name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-phone"
          control={Input}
          label="Phone Number"
          name="phone number"
          placeholder="Phone Number…"
          icon="phone"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-description"
          control={TextArea}
          label="Description of Work Needed"
          name="description"
          placeholder="Description of Work Needed…"
          required
        />
        <Form.Field
          id="form-input-control-business"
          control={Input}
          label="Business"
          name="business"
          placeholder="Business…"
          icon="building"
          iconPosition="left"
        />

        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
