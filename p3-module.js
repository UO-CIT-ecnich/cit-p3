/*
    CIT 281 Project 3
    Name: Elliott Nichols
*/

//validDenom Function

function validDenomination(coin) {
  return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

//value from Coin Object Function

function valueFromCoinObject(obj) {
  const { denom = 0, count = 0 } = obj;
  return validDenomination(denom) ? denom * count : 0;
}

// valueFromArray function

const valueFromArray = (arr) => {
  return arr.reduce((total, coin) => {
    if (Array.isArray(coin)) {
      return total + valueFromArray(coin);
    }
    return total + valueFromCoinObject(coin);
  }, 0);
};

//coinCount function

const coinCount = (...coinage) => {
  return valueFromArray(coinage);
};

module.exports = { coinCount };

console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [
  { denom: 25, count: 2 },
  { denom: 1, count: 7 },
];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));
