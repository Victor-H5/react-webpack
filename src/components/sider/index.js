import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from './index.less';

function getCurrentMenuSelectedKeys(props) {
	const {
		location: { pathname }
	} = props;
	const keys = pathname.split('/').slice(1);
	return [keys[0]];
}

function Sider(props) {
	return (
		<Layout.Sider className={style.sider}>
			<Menu
				defaultSelectedKeys={['home']}
				selectedKeys={getCurrentMenuSelectedKeys(props)}
				mode="vertical"
				theme="light"
			>
				<Menu.Item key="home">
					<Link to="/home">
						<Icon type="desktop" />
						<span>Home</span>
					</Link>
				</Menu.Item>
				<Menu.Item key="detail">
					<Link to="/detail">
						<Icon type="pie-chart" />
						<span>Detail</span>
					</Link>
				</Menu.Item>
			</Menu>
		</Layout.Sider>
	);
}

export default withRouter(Sider);
