import React from "react";
import template from "./RegisterForm.jsx";
import {
  actions
} from 'react-redux-form';

import { MODE_LOGIN } from '../../constants/ProjectConstants';
import { updateComponentMode } from "../../actions/forms";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    updateComponentMode: newComponentMode => { dispatch(updateComponentMode(newComponentMode)) }
  }
}

class ConnectedRegisterForm extends React.Component {

  handleSubmit(details) {
    console.log(details);
  }

  handleClick() {
    // Dispatch action to change mode 
    this.props.updateComponentMode(MODE_LOGIN);
  }

  render() {
    return template.call(this);
  }
}
const RegisterForm = connect(null, mapDispatchToProps)(ConnectedRegisterForm);

export default RegisterForm;
