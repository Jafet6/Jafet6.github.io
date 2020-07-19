const args = [...args];
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
