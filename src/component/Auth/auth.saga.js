import { call, put } from 'redux-saga/effects'
import AuthApi from './auth.api'
import { doMessageNotif, doSigninSuccess, doSignoutSuccess, doSignupSuccess } from './auth.action'

function* handleSignup(action) {
    const {payload} = action
    try {
        const result = yield call(AuthApi.register,payload)
        yield put(doSignupSuccess(result.data)) 
    } catch (error) {
        yield put(doMessageNotif(error))
    }
}

function* handleSignin(action) {
    const {payload} = action
    try {
        const result = yield call(AuthApi.login,payload)
        if (Object.keys(result.data).length === 0) {
            yield put(doMessageNotif({message : 'username atau password salah'}))
        } else {
            sessionStorage.setItem('access_token',result.data.access_token)
            const profile = yield call(AuthApi.profile)
            sessionStorage.setItem('profile',JSON.stringify(profile.data))
            yield put(doSigninSuccess(profile.data))
        }
    } catch (error) {
        yield put(doMessageNotif(error))
    }
}

function* handleSignout(){
    try {
        sessionStorage.clear();
        yield put(doSignoutSuccess({message: 'berhasil log out'}))
    } catch (error) {
        yield put(doMessageNotif(error))       
    }
}

export {
    handleSignin,
    handleSignout,
    handleSignup
}