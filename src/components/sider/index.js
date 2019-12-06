import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from './index.less'

export default function Sider() {
    return (
        <Layout.Sider className={style.sider}>
            <Menu
                defaultSelectedKeys={['home']}
                mode="vertical"
                theme="light"
            >
                <Menu.Item key="home">
                    <Link to="/">
                        <Icon type="desktop" />
                        <span>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="detail">
                    <Link to="/detail">
                        <Icon type="pie-chart" />
                        <span>Home</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}