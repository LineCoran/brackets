module.exports = (str, bracketsConfig) => {
  let brackets = Object.fromEntries(bracketsConfig);
  for (var i = 0; i<str.length; i++){
    if (!thereIsPair()) return false;
  }
  function thereIsPair() {
    let mirror = brackets[str[i]];
    for (i++; i<str.length; i++){
      if (str[i] === mirror) return true;
      if (!thereIsPair()) return false;
      }
    }
    return true;
}
