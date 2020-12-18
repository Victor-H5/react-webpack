import React from 'react';
import './about.less';

interface HelloProps {
	compiler: string;
	framework: string;
}

const Hello = (props: HelloProps) => (
	<h1>
		Hello from {props.compiler} and {props.framework} xxxxx!
	</h1>
);

class About extends React.Component {
	log() {
		console.log('about');
	}

	render(): React.ReactElement {
		return (
			<div>
				<button onClick={this.log}>click</button>
				<Hello compiler="TypeScript" framework="React" />
			</div>
		);
	}
}

export default About;
