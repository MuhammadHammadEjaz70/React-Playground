import React from "react";

const IncrementButton = ({ count, setCount }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment++
      </button>
    </div>
  );
};

export default IncrementButton;
