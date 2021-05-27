import React, { Component } from "react";

class User extends Component {
  //   constructor(props) {
  //     //TODO [1]. yöntem (bind)
  //     super(props);
  //     this.onDeleteClick = this.onDeleteClick.bind(this);
  //   }
  //! Render yukarıya bağlı. Eğer kendi metodumuzu kullanıyorsak bind etmek zorundayız
  //? event en sona yazılır
  onDeleteClick(id, e) {
    //? kendi propsunun içinden al
    const { deleteUser } = this.props;

    //console.log("Clicked", this);
    deleteUser(id);
  }

  //   //TODO [2]. yöntem (bind) arrow function
  //   onDeleteClick = (e) => {
  //     console.log("Clicked");
  //     console.log(this);
  //   };

  render() {
    const { id, name, email } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{id}</td>
        <td>
          {/*[3]. yöntem (bind) <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">*/}
          <center>
            <button
              onClick={this.onDeleteClick.bind(this, id)}
              className="btn btn-danger btn-sm"
            >
              <i class="bi bi-trash"></i>
            </button>
          </center>
        </td>
      </tr>
    );
  }
}
export default User;
