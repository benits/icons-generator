export const camelCase = (string: string) => {
  return string.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
};
