import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import category from './categoryReducer'
import product from './productReducer'

export default combineReducers({
    auth,
    alert,
    category,
    product,
})