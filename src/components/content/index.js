import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout } from 'antd';
import style from './index.less';

function getLoadableViewComponent(path) {
	return Loadable({
		loader: () => import(`../../views/${path}`),
		loading() {
			return null;
		}
	});
}

const Home = getLoadableViewComponent('home/home');
const Detail = getLoadableViewComponent('detail/detail');

export default function Content() {
	return (
		<Layout.Content className={style.content}>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/detail" component={Detail} />
			</Switch>
		</Layout.Content>
	);
}
