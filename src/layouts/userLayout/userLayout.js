import React from 'react';
import style from './userLayout.less';
import Login from '../../views/login/login.container';

export default function UserLayout() {
	return (
		<div className={style.main}>
			<Login />
		</div>
	);
}
