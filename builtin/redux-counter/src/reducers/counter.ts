import { ActionBasicProp } from "../types"


const counter = (state = 1, action:ActionBasicProp) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

export default counter