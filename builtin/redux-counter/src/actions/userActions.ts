import { User, SetUserAction } from "../types"


// Actions
const setUser = (userObj: User):SetUserAction => {
  return {
    type: "SET_USER",
    payload: userObj
  }
}

const logOut = () => (
  {type:"LOG_OUT"}
)

export default{
  setUser,
  logOut
}