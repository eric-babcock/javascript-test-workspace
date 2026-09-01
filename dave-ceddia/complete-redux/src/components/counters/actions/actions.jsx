export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT"; 
export const RESET = "RESET";

// export as a function
export function increment() {
  return { type: INCREMENT };
}

// export as a constant with implicit return statement
export const decrement = () => (
  {type: DECREMENT}
);

export const reset = () => (
  {type: RESET}
);