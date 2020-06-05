import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/header/index';
import Sider from '../../components/sider/index';
import Content from '../../components/content/index';
import style from './basicLayout.less';

export default function BasicLayout() {
	return (
		<Layout className={style.layout}>
			<Header />
			<Layout>
				<Sider />
				<Content />
			</Layout>
		</Layout>
	);
}
