import { 
    REGION_CHANGED, 
    GET_LOCATION,
    SHOW_DIRECTION
} from './types';

export const regionChanged = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {
    return {
        type: REGION_CHANGED,
        payload: ({latitude, longitude, latitudeDelta, longitudeDelta})
    }
}

export const getLocation = ( position ) => {
    return {
        type: GET_LOCATION,
        payload:  position
    }
}

export const showDirection = ( location ) => {
    return {
        type: SHOW_DIRECTION,
        payload: { location }
    }
}