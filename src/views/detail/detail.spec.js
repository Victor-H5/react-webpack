import React from 'react';
import { shallow } from 'enzyme';
import Detail from './detail';

describe('About component', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Detail />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have Detail', () => {
		const wrapper = shallow(<Detail />);
		expect(wrapper.text()).toBe('Detail');
	});
});
