import '@babel/polyfill';
import setPrototypeOf from 'setprototypeof';

// For react setPrototypeOf polyfill for IE <= 10;
if (typeof Object.setPrototypeOf !== 'function') {
	Object.setPrototypeOf = setPrototypeOf;
}
