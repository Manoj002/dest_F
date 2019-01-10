import { combineReducers } from 'redux';
import Otp from './OtpReducer';
import Map from './MapReducer';
import last from './LastScreenReducer';

export default combineReducers({
    Otp, Map, last
})