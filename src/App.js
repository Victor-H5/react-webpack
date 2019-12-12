import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';
import Header from './components/header/index';
import Sider from './components/sider/index';
import Content from './components/Content/index';
import style from './App.less';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Layout className={style.layout}>
					<Header />
					<Layout>
						<Sider />
						<Content />
					</Layout>
				</Layout>
			</HashRouter>
		);
	}
}

export default hot(App);
