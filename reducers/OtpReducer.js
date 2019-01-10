import {
    PHONE_CHANGED, CODE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    phone: '',
    code: ''
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case CODE_CHANGED:
            return { ...state, code: action.payload };
        default: 
            return state;
    }
}