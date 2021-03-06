function range(start = 0, end) {
  // don't pass start to getRange because it is visible inside its scope
  function getRange(endAcross) {
    result = [];
    for (let i = start; i <= endAcross; i++) {
      result.push(i);
    }
    return result;
  }

  function getEnd(end = 0) {
    return getRange(end);
  }

  if (end == undefined) {
    return getEnd;
  }

  return getEnd(end);
}
console.log(range(10)(100));
