
const calculateMagicNumber = (n) => {
  console.log("costly calculation triggered.");
  let num = 1;
  for (let i = 0; i<n + 1000000000; i++) {
    num += 123000;
  }

  return parseInt(num -num * 0.22, 10);
}

export default calculateMagicNumber;