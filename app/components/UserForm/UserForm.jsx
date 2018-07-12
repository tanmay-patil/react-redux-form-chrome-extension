import styles from "./UserForm.scss";
import React from "react";
import Button from '@material-ui/core/Button';

import { Control, Form } from 'react-redux-form';

function template() {
  return (
    <div className={styles.userform}>
      <p className={styles.heading}>Login Form</p>
      <Form
        model="Forms.loginForm"
        onSubmit={(loginForm) => this.handleSubmit(loginForm)}
      >
        <Control.text placeholder="Username" model="Forms.loginForm.username" id="loginForm.username"
          errors={{
            required: (val) => !val || !val.length
          }}
        />

        <Control.password placeholder="password" model="Forms.loginForm.password" id="loginForm.password" />

        <input type="submit" value="Login" />
        <input type="button" className={styles.btnRegister} value="Register" onClick={this.handleRegister.bind(this, "register")} />

      </Form>
    </div>
  );
};

export default template;
