const getRatio = require("../ratio/index");
const getFactor = require("../factorial/index");

const getFactoRatio = (num1, num2, num3) => {
  const ratio = getRatio(num1, num2);
  const factor = getFactor(num3);

  return { ratio, factor };
};

module.exports = getFactoRatio;
