import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setuid] = useState(0);
  const [name, setuname] = useState("");
  const [email, setuemail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setuid(localStorage.getItem("id"));
    setuname(localStorage.getItem("name"));
    setuemail(localStorage.getItem("email"));
  }, []);

  const Handleformdata = (e) => {
    e.preventDefault();
    Axios.put(`https://6648d8ef4032b1331bec986e.mockapi.io/crud/${id}`, {
      id: id,
      user_name: name,
      user_email: email,
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      {" "}
      <div className="mb-2 mt-2">
        <Link to="/">
          <button className="btn btn-primary">Read Data</button>
        </Link>
      </div>
      <Form onSubmit={Handleformdata}>
        <Form.Group className="mb-3">
          <Form.Label>id</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setuid(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setuname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setuemail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
};

export default Edit;
