import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>Using rect and redux</h4>
      <div>
        <a
          title="Decrement"
          onClick={() => {
            dispatch(decNumber());
          }}
        >
          <span>- </span>
          <input name="quantity" type="text" value={myState} />
        </a>
        <a
          title="Increment"
          onClick={() => {
            dispatch(incNumber());
          }}
        >
          <span> +</span>
        </a>
      </div>
    </div>
  );
}

export default App;
