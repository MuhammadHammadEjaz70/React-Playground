import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./components/Card";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Childern from "./components/Childern";
import InputForm2 from "./Forms/InputForm2";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {UserData} from "./contexts/GlobalContext";
function App() {
  // let FirstName = React.createRef();
  // let age = React.createRef();

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [name, setName] = useState("Hammad");
  const [age, setAge] = useState();
  const [values, setValues] = useState();

  const getUser = () => {
    axios
      .get("https://642d0d87bf8cbecdb4fc41bc.mockapi.io/user")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`This is an HTTP error: The status is ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       // console.log(err.message);
  //       setError(err.message);
  //       setData(null);
  //       setLoading(false);
  //     });
  // }, []);

  const postData = () => {
    axios
      .post("https://642d0d87bf8cbecdb4fc41bc.mockapi.io/user", {
        name: name,
        age: age,
        hobbies: ["Sleeping", "Watching Netflix", "Chilling"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.mes);
      });
  };

  const updateUser = (id) => {
    console.log(id);
    axios
      .put(`https://642d0d87bf8cbecdb4fc41bc.mockapi.io/user/${id}`, {
        name: name,
      })
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(`https://642d0d87bf8cbecdb4fc41bc.mockapi.io/user/${id}`, {})
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // const changeCount = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };
  // const decCounts = (count) => {
  //   setCount(count);
  //   // console.log(count);
  // };

  // const filterData = () => {
  //   let filterUser = data.filter((u) => u.id < 5);
  //   // console.log(filterUser);
  //   setData(filterUser);
  // };
  // const mapData = () => {
  //   let filterNumber = numbers
  //     .filter((num) => num >= 5)
  //     .map((filteredNum) => filteredNum * filteredNum);
  //   // console.log(filterNumber);
  //   setNumbers(filterNumber);
  //   // let sqNumber = numbers.map((num) => num * num);
  //   // console.log(sqNumber);
  //   // let mappedArray = data.map((u) => u.id * 2);
  //   // console.log(mappedArray);
  // };

  // const handleChange = () => {
  //   mapData();
  //   filterData();
  // };

  // const changeName = () => {
  //   setName("Anas");
  // };

  // const handleChangeInput = (e) => {
  //   e.preventDefault();
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   console.log(values);
  // };
  // const addNumbers = (num1, num2) => {
  //   console.log(num1 + num2);
  // };

  // const submit = () => {
  //   console.log("submit");
  // };
  return (
    <div className="App">
      <h2>Practice</h2>

      <UserData.Provider value={{ name, setName }}>
        <Home />
        <Profile />
      </UserData.Provider>

      {/* <input
        placeholder="Name"
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        placeholder="Age"
        type="Number"
        name={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>

      <div className="container">
        {user &&
          user.map((u) => (
            <div className="container" key={u.id}>
              {`${u.id} -
              ${u.name}`}
              <button
                className="btn btn-primary m-2"
                onClick={() => updateUser(u.id)}
              >
                update
              </button>
              <button
                className="btn btn-danger m-2"
                onClick={() => deleteUser(u.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div> */}
      {/* <InputForm2 /> */}
      {/* <input
        type="Number"
        placeholder="Enter the Number"
        name="input1"
        onChange={handleChangeInput}
      />
      <input
        type="Number"
        placeholder="Enter the Number"
        name="input2"
        className="m-2"
        onChange={handleChangeInput}
      />
      <button className="btn btn-primary m-2" onClick={() => addNumbers(2, 3)}>
        Add Numbers
      </button> */}

      {/* <input type="Number" /> */}
      {/* <Navbar />
      <h1>Users</h1>

      {loading && <div>A moment please data is loading</div>}
      {error && <div>`There is some problem in fetching data - ${error} `</div>} */}

      {/* {data &&
        data.map((user) => (
          <div className="row  offset-md-1  pt-5 p-7 " key={user.id}>
            <Cards user={user} />
          </div>
        ))} */}
      {/* <div className="container" style={{ overflow: "hidden" }}>
        {numbers.map((num) => (
          <div
            className="card p-2 m-2 "
            style={{
              width: "18rem",
              overflow: "hidden",
              float: "left",
              width: "200px",
              height: "50px",
            }}
            key={num}
          >
            {num}
          </div>
        ))}
      </div> */}

      {/* <button className="btn btn-primary mt-3 " onClick={handleChange}>
        Mapped Array
      </button> */}

      {/* <Counter count={count} changeCount={changeCount} decCounts={decCounts} />
      <h1>
        <Childern name={name} changeName={changeName} />
      </h1> */}

      {/* <button onClick={postData}>Submit</button> */}

      {/* <button onClick={() => setName("Gujjar")}>Change Name</button> */}
    </div>
  );
}

export default App;
