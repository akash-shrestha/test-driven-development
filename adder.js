const adder = (array) => {
  let sum = 0;
  array.map((element, index) => {
    if (element.length) {
      return (sum += adder(element));
    }
    sum += element;
  });
  if (sum >= 999999999) {
    throw new Error("Very large number element in array!");
  }
  return sum;
};

module.exports = adder;
