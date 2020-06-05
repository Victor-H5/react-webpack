import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import BasicLayout from './layouts/basicLayout/basicLayout';
import UserLayout from './layouts/userLayout/userLayout';
import AuthRoute from './components/authRoute/authRoute';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<Switch>
						<Route path="/login" component={UserLayout} />
						<AuthRoute path="/" component={BasicLayout} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default hot(App);
