import * as ActionAuth from './auth.types'

export const doSignupRequest = (payload) => ({
    type: ActionAuth.SIGNUP_REQUEST,
    payload
})

export const doSignupSuccess = (payload) => ({
    type: ActionAuth.SIGNUP_SUCCESS,
    payload
})

export const doSigninRequest = (payload) => ({
    type: ActionAuth.SIGNIN_REQUEST,
    payload
})

export const doSigninSuccess = (payload) => ({
    type: ActionAuth.SIGNIN_SUCCESS,
    payload
})

export const doSignoutRequest = (payload) => ({
    type: ActionAuth.SIGNOUT_REQUEST,
    payload
})

export const doSignoutSuccess = (payload) => ({
    type: ActionAuth.SIGNOUT_SUCCESS,
    payload
})

export const doMessageNotif = (payload) => ({
    type: ActionAuth.MESSAGE_NOTIFICATION,
    payload
})
