import { combineReducers } from 'redux';
import alert from './alert'
import contact from './contact'

export default combineReducers({
    contact,
    alert
});