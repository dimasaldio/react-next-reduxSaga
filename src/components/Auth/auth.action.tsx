import * as ActionAuth from './auth.types'

export const doSignupRequest = (payload:any) => ({
    type: ActionAuth.SIGNUP_REQUEST,
    payload
})

export const doSignupSuccess = (payload:any) => ({
    type: ActionAuth.SIGNUP_SUCCESS,
    payload
})

export const doSignupFailed = (payload:any) => ({
    type: ActionAuth.SIGNUP_FAILED,
    payload
})

export const doSigninRequest = (payload:any) => ({
    type: ActionAuth.SIGNIN_REQUEST,
    payload
})

export const doSigninSuccess = (payload:any) => ({
    type: ActionAuth.SIGNIN_SUCCESS,
    payload
})

export const doSigninFailed = (payload:any) => ({
    type: ActionAuth.SIGNIN_FAILED,
    payload
})

export const doSignoutRequest = () => ({
    type: ActionAuth.SIGNOUT_REQUEST
})

export const doSignoutSuccess = (payload:any) => ({
    type: ActionAuth.SIGNOUT_SUCCESS,
    payload
})

export const doSignoutFailed = (payload:any) => ({
    type: ActionAuth.SIGNOUT_FAILED,
    payload
})
