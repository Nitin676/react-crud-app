// import React, { useState, useEffect } from 'react';

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import { tododb } from '../utils/db';

// db-server-freeapi
// https://64f0dc548a8b66ecf77a2f9d.mockapi.io/crud-youtube

function Create() {
  // data store we use useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  // const header = { "Access-Control-Allow-Origin": "*" };

  // method 1: axios
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Clicked!");
    axios
      .post("https://64f0dc548a8b66ecf77a2f9d.mockapi.io/crud-youtube", {
        name: name,
        email: email,
        // headers: header,
      })
      .then(() => {
        history("/read");
      });
  };
  // method 2: fetch

  return (
    <div className="createPage">
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
            <div className="createTitle d-flex flex-wrap align-items-center justify-content-center">
              <h1>Create Operation</h1>
              <Link to="/read">
                <button type="button" className="btn btn-warning ms-4">
                  Show Data
                </button>
              </Link>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="id_name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="id_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="id_email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="id_email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>

              {/* ========== To check instant output in page ========== */}
              {/* <div className="row output">
                <div className="col-12">
                  <h5>{name}</h5>
                </div>
                <div className="col-12">
                  <h5>{email}</h5>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
