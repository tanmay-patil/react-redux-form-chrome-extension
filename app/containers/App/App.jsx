import 'reset-css';
import style from "./App.scss";
import React from "react";
import { MODE_LOGIN, MODE_REGISTER } from '../../constants/ProjectConstants';

import UserForm from "../../components/UserForm/";
import RegisterForm from "../../components/RegisterForm/";

function template() {

  let selectComponent = null;

  console.log(this.props.componentMode);
  console.log(MODE_REGISTER);

  switch (this.props.componentMode) {
    case MODE_LOGIN:
      selectComponent = <UserForm />;
      break;

    case MODE_REGISTER:
      selectComponent = <RegisterForm />;
      break;

    default:
      selectComponent = <UserForm />;
      break;
  }

  return (
    <div className={style.app}>
      {selectComponent}
    </div>
  );
};

export default template;
