import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { DefaultRootState } from "./index";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: DefaultRootState) => state.cash);
  console.log(cash);
  const addCash = () => {
    dispatch({type: "ADD_CASH"})
  }
  const getCash = () => {

  }
  return (
    <div className="new">
      <div className="amount">{cash}</div>
      <div className="buttons">
        <button onClick={() => addCash()}>Пополнить</button>
        <button onClick={() => getCash()}>Снять</button>
      </div>
    </div>
  );
}

export default App;
