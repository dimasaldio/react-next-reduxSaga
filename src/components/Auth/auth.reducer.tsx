import * as ActionType from './auth.types'
import { getCookie } from 'cookies-next'

const getFromCookies = (key:string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return getCookie(key)
}

const INIT_STATE = {
    authProfile: getFromCookies('profile') ? JSON.parse(getCookie('profile')) : null,
    authSignup: null
}

const AuthReducer = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case ActionType.SIGNIN_REQUEST:
            return state
        case ActionType.SIGNIN_SUCCESS:
            return SigninSuccess(state, action)
        case ActionType.SIGNUP_REQUEST:
            return state
        case ActionType.SIGNUP_SUCCESS:
            return SignupSuccess(state, action)
        case ActionType.SIGNOUT_REQUEST:
            return state
        case ActionType.SIGNOUT_SUCCESS:
            return SignoutSuccess(state, action)
        default:
            return state;
    }
}

const SigninSuccess = (state:any, action:any) => {
    return {
        ...state,
        authProfile: action.payload
    }
}

const SignupSuccess = (state:any,action:any) => {
    return {
        ...state,
        authSignup: action.payload
    }
}

const SignoutSuccess = (state:any,action:any) => {
    return {
        ...state,
        authProfile: null,
        authSignUp: null
    }
}

export default AuthReducer
