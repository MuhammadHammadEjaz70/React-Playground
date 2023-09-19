import React, { useState } from "react";

const InputForm = () => {
  const [dataObj, setDataObj] = useState({});

  const handleInputChange = (name, value) => {
    let data = { [name]: value };
    setDataObj({ ...dataObj, ...data });
  };
  console.log(dataObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataObj);
    // console.log("handle submit");
  };
  return (
    <>
      <h1>InputForm</h1>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            className="m-2"
          />
          <input
            type="Number"
            name="age"
            placeholder="Age"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            className="m-2"
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Hobbies"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            className="m-2"
          />
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            className="m-2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default InputForm;
