import { 
    SHOW_DESCRIPTION,
} from './types';

export const showDescription = (show, id) => {

    return {
        type: SHOW_DESCRIPTION,
        payload: { show, id }
    }

}