const FATORIAL = (num1) => {
  if (num1 <= 1) {
    return 1;
  } else {
    return (num1 * FATORIAL(num1 - 1))
  }
}

console.log(FATORIAL(3));