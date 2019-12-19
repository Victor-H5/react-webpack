import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import BasicLayout from './layouts/basicLayout/basicLayout';
import UserLayout from './layouts/userLayout/userLayout';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/user" component={UserLayout} />
					<Route path="/" component={BasicLayout} />
				</Switch>
			</HashRouter>
		);
	}
}

export default hot(App);
