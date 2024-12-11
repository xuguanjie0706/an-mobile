export const attachPropertiesToComponent = <T, P extends Record<string, any>>(
  component: T,
  properties: P
): T & P => {
  const res =  component as any
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      res[key] = properties[key];
    }
  }
  return res;
};
