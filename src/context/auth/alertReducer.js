import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING } from "../types";

export default (state,action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error:{msg:'Loggedin successful',type:'success'}
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                error:{msg:'invalid Crdentials',type:'danger'}
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            } 
        default:
            return state;
    }
}