import React, { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container">{count}</div>

      <IncrementButton count={count} setCount={setCount} />
      <DecrementButton count={count} setCount={setCount} />
    </div>
  );
};

export default Counter;
