import React, { Component } from "react";

class AddUser extends Component {
  state = {
    name: "",
    email: "",
  };

  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onAddSubmit(e) {
    //console.log("Form Submit");
    var uniqid = require("uniqid");
    const { addUser } = this.props;
    const { name, email } = this.state;
    //? benzersiz id oluşturma
    const newUser = {
      id: uniqid(),
      name: name,
      email: email,
    };
    //adduser'a newuserı gönder
    addUser(newUser);
    //sayfayı submit etme
    e.preventDefault();
  }
  render() {
    //bilgileri al
    const { name, email } = this.state;
    return (
      <div className="card">
        <h4 className="card-header bg-warning text-white">Add New User</h4>
        <div className="card-body">
          <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className="form-group">
              <h6>
                <label htmlFor="name">Name</label>
              </h6>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="form-control"
                autoComplete="off"
                value={name}
                onChange={this.onNameChange.bind(this)}
              ></input>
              <br />
            </div>
            <div className="form-group">
              <h6>
                <label htmlFor="email">Email</label>
              </h6>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter E-mail"
                className="form-control"
                autoComplete="off"
                value={email}
                onChange={this.onEmailChange.bind(this)}
              ></input>
              <br />
            </div>
            <center></center>
            <button
              type="submit"
              className="w-100 btn btn-lg btn-warning text-white"
            >
              <i className="bi bi-plus fa-3x"></i> New User
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;
