import React, { useState, useEffect } from "react";
// local db.js
// import { tododb } from "../utils/db";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(tododb);
  //   // console.log(tododb);
  // }, []);

  // getData - GET DATA
  function getData() {
    axios
      .get(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/crud-youtube`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  // handleDelete - DELETE BUTTON
  function handleDelete(id) {
    axios
      .delete(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  // save data on local storage - on click EDIT Button
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="readPage">
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
            <div className="createTitle d-flex flex-wrap align-items-center justify-content-center">
              <h1>Read Operation</h1>
              <Link to="/create">
                <button type="button" className="btn btn-warning ms-4">
                  Create Data
                </button>
              </Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {data.length > 0 && (
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to="/update">
                          <button
                            type="button"
                            onClick={() =>
                              setToLocalStorage(item.id, item.name, item.email)
                            }
                            className="btn btn-success"
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
