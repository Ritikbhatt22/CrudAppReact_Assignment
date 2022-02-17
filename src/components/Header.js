import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/login")}>login</button>
      <button onClick={() =>{ 
          localStorage.clear()
          history.push("/")}}>logout</button>
      <button onClick={() => history.push("/blogs")}>Blogs</button>
    </div>
  );
}
