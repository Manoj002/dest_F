import {
    SHOW_DESCRIPTION
} from '../actions/types';

const INITIAL_STATE = {
    show: false,
    id: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SHOW_DESCRIPTION:
            return { ...state, show: action.payload.show ? false : true, id: action.payload.id }
        default: 
            return state;
    }
}