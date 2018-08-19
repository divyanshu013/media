import { compose } from '..';

test('compose should shallow merge objects', () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  const res = compose(
    obj1,
    obj2,
  );
  expect(res).toMatchObject({
    ...obj1,
    ...obj2,
  });
});
