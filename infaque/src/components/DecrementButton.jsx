import React from "react";

const DecrementButton = ({ count, setCount }) => {
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(count <= 0 ? 0 : count - 1);
        }}
      >
        Decrement--
      </button>
    </div>
  );
};

export default DecrementButton;
