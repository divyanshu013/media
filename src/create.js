const create = (breakpoints, type) =>
  Object.values(breakpoints).reduce(
    (mediaObject, [breakpoint, value]) => ({
      ...mediaObject,
      [breakpoint]: `@media (${type}-width: ${value}px)`,
    }),
    {},
  );

export default create;
