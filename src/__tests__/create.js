import create from '../create';
import breakpoints from '../breakpoints';

test('snapshot create min query', () => {
  const query = create(breakpoints, 'min');
  expect(query).toMatchSnapshot();
});

test('snapshot create max query', () => {
  const query = create(breakpoints, 'max');
  expect(query).toMatchSnapshot();
});
