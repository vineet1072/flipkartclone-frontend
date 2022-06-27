export const addEllipsis = (text) => {
  if (text.length > 50) {
    return text.sustring(0, 50) + "....";
  }
  return text;
};
