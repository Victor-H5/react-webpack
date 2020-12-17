import { put, takeEvery } from 'redux-saga/effects';
import ActionTypes from '../types/login';
import Actions from '../actions/login';

function* login() {
	yield put(Actions.changeLoginStatus(true));
}

function* watchLogin() {
	yield takeEvery(ActionTypes.LOGIN, login);
}

export default watchLogin;
