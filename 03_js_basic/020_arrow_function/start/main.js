function fn(number) {
  return number * 2;
}

console.log(fn(2));

const fnArrow = (number) => {
  console.log(number);
  return number * 2;
}

const fnArrowobj = number => ({ result: number * 2 })
console.log(fnArrow(2));