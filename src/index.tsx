import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

export interface DefaultRootState {
  cash : number,
}
const defaulRootState: DefaultRootState = {
  cash: 0,
}
interface Action {
  type: string,
  payload: number,
}
let action: Action = {type:"", payload: 0};
const reducer = (state: DefaultRootState = defaulRootState, action: Action) => {
  switch(action.type){
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}

    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}

    default:
      return state

  }
};
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
