module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let brackets = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < str.length; i++) {
    (arr.length === 0) ? arr.push(str[i]) : (str[i] == brackets[arr[arr.length - 1]]) ? arr.pop() : arr.push(str[i]);
  }  return !arr.length; }
