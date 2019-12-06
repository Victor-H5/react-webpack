import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import style from './index.less';
import Home from '../../views/home/home';
import Detail from '../../views/detail/detail';

export default function Content() {
    return (
        <Layout.Content className={style.content}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Switch>
        </Layout.Content>
    )
}