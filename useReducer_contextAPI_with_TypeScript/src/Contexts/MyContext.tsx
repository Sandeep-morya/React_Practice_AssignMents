import React from "react";

interface userType {
  name: string;
  age: number;
}
type actionType =
  | {
      type: "CHANGE_NAME";
      payload: string;
    }
  | { type: "CHANGE_AGE"; payload: number };

const initialState = {
  name: "Reshma",
  age: 65,
};

const reducer = (state: userType, action: actionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "CHANGE_AGE":
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};
interface ctxType {
  state: typeof initialState;
  dispatch: React.Dispatch<actionType>;
}
export const MyContext = React.createContext({} as ctxType);

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
