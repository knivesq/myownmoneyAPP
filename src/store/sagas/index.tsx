import { all, call, takeLatest, fork, takeEvery, put, takeLeading, spawn, take, race } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import { getUserAuth } from './auth'
import { getSplashStart } from './splash'
// import { AuthActions} from '../loader'
import { AuthTypes, SplashTypes } from '../types'



function* auth(action: any) {
	yield all([
		takeLatest(AuthTypes.GET_USER_AUTH, getUserAuth),

	])
}
function* splash(action: any) {
	yield all([
		takeLatest(SplashTypes.SPLASH_START, getSplashStart),

	])
}

export default function* rootSaga() {
	return yield all([
		fork(networkSaga, { pingInterval: 20000 }),
		call(splash),
		call(auth)

	]);
}
