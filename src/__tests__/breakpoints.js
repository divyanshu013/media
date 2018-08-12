import breakpoints from '../breakpoints';

test('breakpoints snapshot', () => {
  expect(breakpoints).toMatchSnapshot();
});
