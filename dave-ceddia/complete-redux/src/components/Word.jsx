const Word = () => {

  var letters = ['r','e','d','u','x'];

  // `reduce` takes 2 arguments:
  //   - a function to do the reducing (you might say, a "reducer")
  //   - an initial value for accumulatedResult
  var word = letters.reduce(
    function(accumulatedResult, arrayItem) {
    return accumulatedResult + arrayItem;
  }, '');

  console.log(word) // => 'redux'
  return (
    <>{word}</>
  )
}

export default Word;