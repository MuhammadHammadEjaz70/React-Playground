import React from "react";
import { useState } from "react";

const Counter = ({ count, changeCount, decCounts }) => {
  //   console.log("decCount --->", decCounts);
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={changeCount}>
        Click the button to increase
      </button>
      <button
        className="btn btn-primary"
        onClick={() => decCounts(count > 0 ? count - 1 : 0)}
      >
        Click the button to decrease
      </button>
    </div>
  );
};

export default Counter;
