import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  // data store we use useState
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/crud-youtube/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="createPage">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Update Operation</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="id_name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="id_name"
                  value={name}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <Link to="/read" type="button" className="btn btn-warning ms-4">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
