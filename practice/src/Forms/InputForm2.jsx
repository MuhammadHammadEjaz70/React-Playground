import React, { useState } from "react";

const InputForm2 = () => {
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
//   console.log("values--->", values);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
            onChange={handleInputChange}
            className="m-2"
          />
          <input
            type="Number"
            name="age"
            placeholder="Age"
            onChange={handleInputChange}
            className="m-2"
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Hobbies"
            onChange={handleInputChange}
            className="m-2"
          />
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={handleInputChange}
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

export default InputForm2;
