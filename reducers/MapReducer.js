import {
    REGION_CHANGED, 
    GET_LOCATION,
    SHOW_DIRECTION
} from '../actions/types';

const INITIAL_STATE = {
    region: {
        latitude: 19.0825223,
        longitude: 72.7410978,
        latitudeDelta: 0.001,
        longitudeDelta: 0.005
    },
    currentLocation: { // set lat and lng to "" and try to find currentLocation via gps and cellular networks
        coords: {
        latitude: 18,
        longitude: 72
        }
    },
    markers: {  // dynamic array for markers
        coordinate: {
            lat: '',
            lng: ''
        }
    }
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case REGION_CHANGED:
            return { ...state, region: action.payload }
        case GET_LOCATION:
            return { ...state, currentLocation: action.payload }
        case SHOW_DIRECTION:
            return { ...state, }
        default:
            return state;
    }
}
