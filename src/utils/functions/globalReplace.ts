const globalReplace = (string: string, tag: string, value: string): string => {
  var re = new RegExp(tag, "g");
  return string.replace(re, value);
};
export default globalReplace;
