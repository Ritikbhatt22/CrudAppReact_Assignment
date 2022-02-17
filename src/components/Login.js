import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Header from "./Header";
export default function Login() {
  const [users, updateUser] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const fetchData1 = (e) => {
    const [key, val] = [e.target.name, e.target.value];
    updateUser({ ...users, [key]: val });
  };

  const loginnow = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post(
        "http://rohanpahwa71.pythonanywhere.com/blog/api-token-auth/",
        users
      );
      console.log(data.data.token,"dsa")
     localStorage.setItem("token",data.data.token)
      history.push("/blogs");
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <>
      <Header></Header>

      <form>
        <label>
          username:
          <input
            type="text"
            onChange={(e) => {
              fetchData1(e);
            }}
            name={"username"}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => {
              fetchData1(e);
            }}
            name={"password"}
          />
        </label>
        <button
          className="button"
          variant="contained"
          onClick={(e) => loginnow(e)}
        >
          Submit Data
        </button>
      </form>
    </>
  );
}
