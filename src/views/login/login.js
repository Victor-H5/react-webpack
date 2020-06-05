import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
import style from './login.less';

class Login extends Component {
	onSubmit = e => {
		e.preventDefault();
		const { form, login } = this.props;
		const { validateFields, getFieldsValue } = form;
		validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		login(getFieldsValue());
	};

	render() {
		const { status, form } = this.props;
		const { getFieldDecorator } = form;
		return status ? (
			<Redirect to="/home" />
		) : (
			<div className={style.main}>
				<div className={style.container}>
					<Form onSubmit={this.onSubmit}>
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: 'Please input your username!' }]
							})(
								<Input
									prefix={
										<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
									}
									placeholder="Username"
								/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }]
							})(
								<Input
									prefix={
										<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
									}
									type="password"
									placeholder="Password"
								/>
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className={style.button}>
								Log in
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	status: PropTypes.bool,
	login: PropTypes.func,
	form: PropTypes.object
};

export default Form.create({ name: 'login' })(Login);
