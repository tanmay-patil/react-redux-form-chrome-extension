import styles from "./RegisterForm.scss";
import React from 'react';
import {
  Form,
  Control
} from 'react-redux-form';

function template() {
  return (
    <div className="register-form">
      <Form
        model="Forms.registerForm"
        onSubmit={(registerForm) => this.handleSubmit(registerForm)}
      >
        <Control.text placeholder="First Name" model="Forms.registerForm.firstName" id="registerForm.firstName"
          errors={{
            required: (val) => !val || !val.length
          }}
        />

        <Control.text placeholder="Last Name" model="Forms.registerForm.lastName" id="registerForm.lastName"
          errors={{
            required: (val) => !val || !val.length
          }}
        />

        <Control.text placeholder="Username" model="Forms.registerForm.username" id="registerForm.username"
          errors={{
            required: (val) => !val || !val.length
          }}
        />

        <Control.password placeholder="password" model="Forms.registerForm.password" id="registerForm.password" />

        <br />
        <input type="submit" value="Submit" />
        <br />
        <input type="button" value="Go to Login" onClick={this.handleClick.bind(this)} />

      </Form>
    </div>
  );
};

export default template;