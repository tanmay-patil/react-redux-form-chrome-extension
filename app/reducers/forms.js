import {
    combineForms
} from 'react-redux-form';

const initialLoginState = {
    username: '',
    password: ''
};

const initialRegisterState = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
}

export const Forms = combineForms({
    loginForm: initialLoginState,
    registerForm: initialRegisterState
}, 'Forms')