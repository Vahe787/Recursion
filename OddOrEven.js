function oddNum(num) {
  let numStr = num.toString();

  if (numStr.length === 1 && numStr % 2 !== 0) {
    return true;
  }

  if (numStr[numStr.length - 1] % 2 === 0) {
    return false;
  }

  let newStr = numStr.slice(0, numStr.length - 1);
  return oddNum(Number(newStr));
}
console.log(oddNum(4211133));
console.log(oddNum(7791));
console.log(oddNum(5));
