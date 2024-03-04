function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b == true;
};

function either(a, b) {
  return a || b == true;
};

function none(a, b) {
  return !(a || b) == true;
};

function one(a, b) {
  return (a ^ b) == true;
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b; 
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return (a % 2)  == 1;  
};

function isEven(a) {
  return (a % 2) == false;
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  return string.startsWith(char);
};

function containsVowels(string) {
  return string.toLowerCase().includes("a") ||
   string.toLowerCase().includes("e") ||
   string.toLowerCase().includes("i") ||
   string.toLowerCase().includes("o") ||
   string.toLowerCase().includes("u") == true;
};

function isLowerCase(string) {
  return string == string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
