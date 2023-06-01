import React from "react";
import Table from "react-bootstrap/Table";

import User from "./User";

function Users({ users }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <User user={user} count={index + 1} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
