import create from './create';
import breakpoints from './breakpoints';

const mediaMax = create(breakpoints, 'max');
const mediaMin = create(breakpoints, 'min');

const compose = (obj1, obj2) => Object.assign(obj1, obj2);

export { mediaMax, mediaMin, breakpoints, compose, create };
