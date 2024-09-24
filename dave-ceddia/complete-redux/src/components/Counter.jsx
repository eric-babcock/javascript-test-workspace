import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "../actions/actions";

/*
const letters = ['r', 'e', 'd', 'u', 'x'];

var word = letters.reduce(
  function(accumulatedResult, arrayItem) {
    return accumulatedResult + arrayItem;
  }, ''// <--this empty string argument is the initial value
);
*/

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  // remove local state
  //state = { count: 42 }


  increment = () => {
    // also this
    /*this.setState({
      count: this.state.count + 1
    });*/
    // replace with
    this.props.dispatch({ type: INCREMENT });
  };

  decrement = () => {
    // and this
    /*this.setState({
      count: this.state.count -1
    });*/
    // replace with 
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
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
        <div className="reset">
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);