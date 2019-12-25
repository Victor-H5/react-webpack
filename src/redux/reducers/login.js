import ActionTypes from '../types/login';

const initialState = {
	status: false
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case ActionTypes.CHANGE_LOGIN_STATUS: {
			return {
				...state,
				status: action.status
			};
		}

		default:
			return state;
	}
}
