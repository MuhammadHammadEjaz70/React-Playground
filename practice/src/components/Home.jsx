import React from "react";
import { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";
const Home = () => {
  let { name } = useContext(UserData);
  return <div>The name is {name}</div>;
};

export default Home;
