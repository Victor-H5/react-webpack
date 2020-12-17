import ActionTypes from '../types/login';

export interface ChangeLoginStatusAction {
	type: ActionTypes.CHANGE_LOGIN_STATUS;
	status: boolean;
}

export interface LoginAction {
	type: ActionTypes.LOGIN;
	payload: any;
}

export type LoginActions = ChangeLoginStatusAction | LoginAction;

export default {
	changeLoginStatus(status: boolean): ChangeLoginStatusAction {
		return {
			type: ActionTypes.CHANGE_LOGIN_STATUS,
			status
		};
	},

	login(payload: any): LoginAction {
		return {
			type: ActionTypes.LOGIN,
			payload
		};
	}
};
