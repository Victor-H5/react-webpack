import React from 'react';
import { shallow } from 'enzyme';
import About from './about';

describe('About component', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<About />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should has click', () => {
		const wrapper = shallow(<About />);
		expect(wrapper.contains('click')).toBe(true);
	});
});
