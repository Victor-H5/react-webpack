import ActionTypes from '../types/login';

export default {
	changeLoginStatus(status) {
		return {
			type: ActionTypes.CHANGE_LOGIN_STATUS,
			status
		};
	},

	login(payload) {
		return {
			type: ActionTypes.LOGIN,
			payload
		};
	}
};
