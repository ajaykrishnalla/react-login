import React, {useReducer} from 'react';
import authReducer from './alertReducer';
import AuthContext from './authContext';
import { LOGIN_SUCCESS, LOGIN_FAIL, SET_LOADING } from '../types';

const AuthState = props => {
    const intialState = {
        isAuthenticated: false,
        loading: false,
        error: null
    }
    const [state,dispatch] = useReducer(authReducer,intialState);
    const logIn = data => {
    
        setLoading();
        if(data.email === 'test@test.com' && data.password === 'test'){
            dispatch({
                type: LOGIN_SUCCESS
            })
        }else{
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }
    return ( 
        <AuthContext.Provider
        value={{
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            logIn,
            setLoading
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;