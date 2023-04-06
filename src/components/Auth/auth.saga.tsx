import { call, put } from 'redux-saga/effects'
import AuthApi from './auth.api'
import { doSigninSuccess, doSignoutSuccess, doSignupSuccess, doSignoutFailed, doSigninFailed, doSignupFailed } from './auth.action'
import {setCookie, deleteCookie} from 'cookies-next'

function* handleSignup(action:any):any {
    const {payload} = action
    try {
        const result = yield call(AuthApi.register,payload)
        yield put(doSignupSuccess(result.data)) 
    } catch (error) {
        yield put(doSignupFailed(error))
    }
}

function* handleSignin(action:any):any {
    const {payload} = action
    try {
        const result = yield call(AuthApi.login,payload)
        if (Object.keys(result.data).length === 0) {
            yield put(doSigninFailed({message : 'username atau password salah'}))
        } else {
            setCookie('access_token',result.data.access_token)
            const profile = yield call(AuthApi.profile)
            setCookie('profile',JSON.stringify(profile.data))
            yield put(doSigninSuccess(profile.data))
        }
    } catch (error) {
        yield put(doSigninFailed(error))
    }
}

function* handleSignout(){
    try {
        deleteCookie('access-token')
        deleteCookie('profile')
        yield put(doSignoutSuccess({message: 'berhasil log out'}))
    } catch (error) {
        yield put(doSignoutFailed(error))       
    }
}

export {
    handleSignin,
    handleSignout,
    handleSignup
}