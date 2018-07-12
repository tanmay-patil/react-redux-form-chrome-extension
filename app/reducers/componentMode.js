import { MODE_LOGIN } from '../constants/ProjectConstants';
import { CHANGE_COMPONENT_MODE } from "../constants/ActionTypes";

export default (state = MODE_LOGIN, action) => {
    switch (action.type) {

        case CHANGE_COMPONENT_MODE:
            // return { ...state, componentMode: action.payload }
            return action.payload;

        default:
            return state;
    }
};