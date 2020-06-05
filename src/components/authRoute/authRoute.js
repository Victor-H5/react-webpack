import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function AuthRoute({ component: Component, access, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				access ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}

AuthRoute.propTypes = {
	component: PropTypes.func,
	access: PropTypes.bool,
	location: PropTypes.object
};

export default connect(state => ({ access: state.login.status }))(AuthRoute);
