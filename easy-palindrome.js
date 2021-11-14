var isPalindrome = function (x) {
  let counter = 0;
  let res = false;
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  x = x.toString();

  for (let i = x.length - 1; i > 0; i--) {
    if (x[counter] === x[i]) {
      res = true;
    } else {
      return false;
    }
    counter = counter + 1;
  }
  return res;
};

console.log(isPalindrome(101));
