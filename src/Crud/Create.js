import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [uname, setuname] = useState("");
  const [uemail, setuemail] = useState("");
  const navigate = useNavigate();

  const Handleformdata = (e) => {
    e.preventDefault();
    Axios.post("https://6648d8ef4032b1331bec986e.mockapi.io/crud", {
      user_name: uname,
      user_email: uemail,
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
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={uemail}
            onChange={(e) => setuemail(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Create;
