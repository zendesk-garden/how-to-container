export const cssProps = Object.keys(getComputedStyle(document.body)).filter(
  item => isNaN(parseInt(item, 10))
);

export function camelCaseToDash(myStr) {
  return myStr.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
}
