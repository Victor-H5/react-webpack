import { connect } from 'react-redux';
import Login from './login';
import Actions from '../../redux/actions/login';

const mapStateToProps = state => {
	return {
		status: state.login.status
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login(data) {
			dispatch(Actions.login(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
