import React from "react";
import template from "./UserForm.jsx";
import axios from "axios";
import { MODE_REGISTER } from '../../constants/ProjectConstants';
import { updateComponentMode } from "../../actions/forms";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    componentMode: state.componentMode
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateComponentMode: newComponentMode => { dispatch(updateComponentMode(newComponentMode)) }
  }
}

class ConnectedUserForm extends React.Component {

  handleSubmit(user) {
    console.log(user);

    axios.post('https://reqres.in/api/login', {
      "email": user.username,
      "password": user.password
    })
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          alert("Yayy! Success");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Oops! Login Failed");
      });
  }

  handleRegister() {
    // Dispatch action to change component mode to Register
    this.props.updateComponentMode(MODE_REGISTER);
  }

  render() {
    return template.call(this);
  }
}

const UserForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserForm);

export default UserForm;
