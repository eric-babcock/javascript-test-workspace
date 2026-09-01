const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => (
    {type: "DECREMENT"}
)

export default {
  increment,
  decrement
}