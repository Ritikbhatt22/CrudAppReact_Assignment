import React, { useEffect, useState } from "react";
import ReactDOM, { render } from "react-dom";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Header from "./Header";

export default function Blogs() {
  const [blogsData, updateBlogs] = useState([]);
  const [numberDisplay, updateDisplay] = useState(0);

  const blogsDisplay = async () => {
    try {
      let url = "";
      if (numberDisplay > 0) {
        url = `http://rohanpahwa71.pythonanywhere.com/blog/post/${numberDisplay}`;
      } else {
        url = `http://rohanpahwa71.pythonanywhere.com/blog/post/`;
      }

      const data = await axios.get(url);
      updateBlogs(data.data);
    } catch (e) {
      console.log(e, "error");
    }
  };
  useEffect(() => {
    blogsDisplay();
  }, []);

  return (
    <>
      <Header></Header>
      <div>
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => {
              updateDisplay(e.target.value);
            }}
            name={"password"}
          />
        </label>
        <button
          className="button"
          variant="contained"
          onClick={(e) => blogsDisplay(e)}
        >
          Submit
        </button>

        {JSON.stringify(blogsData)}
      </div>
    </>
  );
}
