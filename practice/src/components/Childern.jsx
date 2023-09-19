import React from "react";

const Childern = ({ name, changeName }) => {
  return (
    <div className="container">
      {name}

      <button className="btn btn-primary" onClick={changeName}>
        Change Name
      </button>
    </div>
  );
};

export default Childern;
