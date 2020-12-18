module.exports = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	transform: {
		'^.+\\.[j]sx?$': 'babel-jest',
		'^.+\\.[t]sx?$': 'ts-jest'
	},
	moduleNameMapper: {
		'^.+(\\.module)?\\.(css|less|jpg|jepg|png|svg)$': 'identity-obj-proxy'
	}
};
