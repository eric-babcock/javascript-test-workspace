// User
export interface User {
  id: string;
  name: string;
  email:string;
}


// Actions
export interface SetUserAction {
  type: "SET_USER";
  payload: User;
}

export interface ActionBasicProp {
  type: string
}

export type AllActionsTypes = ActionBasicProp | SetUserAction