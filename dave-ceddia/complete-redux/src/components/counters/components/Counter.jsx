import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/actions";

/*
const letters = ['r', 'e', 'd', 'u', 'x'];

var word = letters.reduce(
  function(accumulatedResult, arrayItem) {
    return accumulatedResult + arrayItem;
  }, ''// <--this empty string argument is the initial value
);
*/

/*
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
$$$
*/

const Counter = () => {
  // remove local state
  //state = { count: 42 }

  //$$$
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()


  /* replace all with implace functions now that we have the action creator pattern in place
  const increment = () => {
    // also this
      //this.setState({
      //count: this.state.count + 1
      //});
    // replace with
    dispatch(increment());
  };

  const decrement = () => {
    // and this
      //this.setState({
      //  count: this.state.count -1
      //});
    // replace with 
    dispatch(decrement);
  };

  const reset = () => {
    dispatch({ type: RESET });
  };
  */

  /* `reduce` takes 2 arguments:
       - a function to do the reducing (you might say, a "reducer")
       - an initial value for accumulatedResult
  */

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span className="count">{
          // Replace state:
          //// this.state.count
          // With props:
          count
        }
        </span>
        {/*TODO: ADD LR PADDING*/}
        <button onClick={() => dispatch(increment())}>+</button>
        {/*<h3>
          {word}
        </h3>*/}
      </div>
      <div className="reset">
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
  }

export default Counter;