import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apidata, setapidata] = useState([]);
  function getdata() {
    Axios.get("https://6648d8ef4032b1331bec986e.mockapi.io/crud").then(
      (response) => {
        setapidata(response.data);
      }
    );
  }
  function handledelete(id) {
    Axios.delete(`https://6648d8ef4032b1331bec986e.mockapi.io/crud/${id}`).then(
      () => {
        getdata();
      }
    );
  }
  function setDataStorage(id, user_name, user_email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", user_name);
    localStorage.setItem("email", user_email);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {" "}
      <div className="mb-2 mt-2">
        {" "}
        <Link to="/create">
          <button className="btn btn-primary">Create Data</button>
        </Link>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user_name}</td>
                  <td>{item.user_email}</td>
                  <td>
                    <Link to="/edit">
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setDataStorage(
                            item.id,
                            item.user_name,
                            item.user_email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>{" "}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (
                          window.confirm("are you sure you want to delete it")
                        )
                          handledelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Read;
