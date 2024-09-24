import React from "react";

/*
const letters = ['r', 'e', 'd', 'u', 'x'];

var word = letters.reduce(
  function(accumulatedResult, arrayItem) {
    return accumulatedResult + arrayItem;
  }, ''// <--this empty string argument is the initial value
);
*/

class Counter extends React.Component {
  // remove local state
  //state = { count: 42 }


  increment = () => {
    // also this
    /*this.setState({
      count: this.state.count + 1
    });*/
  }

  decrement = () => {
    // and this
    /*this.setState({
      count: this.state.count -1
    });*/
  };

  

  /* `reduce` takes 2 arguments:
       - a function to do the reducing (you might say, a "reducer")
       - an initial value for accumulatedResult
  */



  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{
            // Replace state:
            //// this.state.count
            // With props:
            this.props.count
          }
          </span>
          {/*TODO: ADD LR PADDING*/}
          <button onClick={this.increment}>+</button>
          {/*<h3>
            {word}
          </h3>*/}
        </div>
      </div>
    );
  }
}

export default Counter;