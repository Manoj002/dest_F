import {
    PHONE_CHANGED,
    CODE_CHANGED
} from './types';

export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    }
}

export const codeChanged = (text) => {
    return {
        type: CODE_CHANGED,
        payload: text
    }
}