import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Users from "./components/Users";
import MultiStepForm from "./components/MultiStepper";
import Button from "react-bootstrap/Button";

import "./App.css";

function App() {
  const u = [
    { name: "user1", email: "example1.com" },
    { name: "user2", email: "example2.com" },
    { name: "user3", email: "example3.com" },
    { name: "user4", email: "example4.com" },
    { name: "user5", email: "example5.com" },
  ];
  const [users, setUsers] = useState(u);
  const [addUser, setAddUser] = useState(false);
  const onHandleSubmit = (user) => {
    setUsers([...users, user]);
    toggleAddUser();
  };

  const toggleAddUser = () => {
    setAddUser(!addUser);
  };

  return (
    <Container className="App">
      <Row>
        <Col>
          <div className="users-containers">
            <div className="list-head d-flex justify-content-between mb-3">
              <h2>Users List</h2>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={toggleAddUser}
                disabled={addUser}
              >
                Add User
              </Button>
            </div>
            <Users users={users} />
          </div>
          {addUser && (
            <div className="custom-form mb-5 mt-5">
              <div>
                <h3>Add a new user</h3>
              </div>
              <MultiStepForm onHandleSubmit={onHandleSubmit} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
