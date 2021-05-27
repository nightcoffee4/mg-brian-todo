import React, { Component } from "react";
import User from "./User";
class Sutunlar extends Component {
  render() {
    //TODO. props al
    const { kullanicilar, deleteUser } = this.props;
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <table
        className="table table-striped bg-white table-hover"
        style={{ mystyle }}
      >
        <thead>
          <tr className="table-warning">
            <th scope="col">
              <i class="bi bi-person"></i> Name Surname
            </th>
            <th scope="col">
              <i class="bi bi-envelope"></i> Email
            </th>
            <th scope="col">
              <i class="bi bi-key"></i> ID
            </th>
            <th scope="col">
              <i class="bi bi-person-dash"></i> Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {kullanicilar.map((user) => {
            const { id, name, email } = user;
            //? deleteUser'i her bir user componente geçireceğiz
            return (
              <User
                key={id}
                id={id}
                name={name}
                email={email}
                deleteUser={deleteUser}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Sutunlar;
