import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Header from "./Header";
export default function Register() {
  const [users, updateUser] = useState({
    user: {
      username: "",
      password: "",
    },
    first_name: "",
    last_name: "",
    phone: "",
    user_type: "admin_user",
    city: "",
    state: "",
    country: "",
  });
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  const history = useHistory();
  const fetchData1 = (e) => {
    let [key, val] = [e.target.name, e.target.value];

    updateUser((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        [key]: val,
      },
    }));
  };

  const fetchData = (e) => {
    let [key, val] = [e.target.name, e.target.value];

    updateUser((prevState) => ({
      ...prevState,

      [key]: val,
    }));
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post(
        "http://rohanpahwa71.pythonanywhere.com/blog/users/",
        users
      );

      history.push("/login");
    } catch (e) {
      console.log(e, "error");
    }
  };

  const getData = async () => {
    try {
      let data = await axios.get(
        `http://rohanpahwa71.pythonanywhere.com/blog/users/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.log(error);
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
        <label>
          first_name:
          <input
            type="text"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"first_name"}
          />
        </label>
        <label>
          last_name:
          <input
            type="text"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"last_name"}
          />
        </label>
        <label>
          phone:
          <input
            type="number"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"phone"}
          />
        </label>
        <label>
          user_type:
          <select onChange={(e) => fetchData(e)} name={"user_type"}>
            <option value="admin_user">admin_user</option>
            <option value="normal_user">normal_user</option>
          </select>
          {/* <input
          type="text"
          onChange={(e) => {
            fetchData(e);
          }}
          
        /> */}
        </label>
        <label>
          city:
          <input
            type="text"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"city"}
          />
        </label>
        <label>
          state:
          <input
            type="text"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"state"}
          />
        </label>
        <label>
          country:
          <input
            type="text"
            onChange={(e) => {
              fetchData(e);
            }}
            name={"country"}
          />
        </label>
        <button
          className="button"
          variant="contained"
          onClick={(e) => createUser(e)}
        >
          Submit Data
        </button>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </>
  );
}
