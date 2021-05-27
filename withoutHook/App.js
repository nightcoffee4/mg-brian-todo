import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Sutunlar from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kullanicilar: [
        {
          id: "knh61hte",
          name: "Melih Güven",
          email: "add@mail.club",
        },
        {
          id: "knh61ioq",
          name: "Berk Sam",
          email: "add2@mail.club",
        },
        {
          id: "knh61jey",
          name: "Yasin Kızıldeniz",
          email: "add3@mail.club",
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updatedUsers = this.state.kullanicilar;

    updatedUsers.push(newUser);

    this.setState({
      kullanicilar: updatedUsers,
    });
  }

  deleteUser(id) {
    //bulunduğumuz sateteki usersı alıcaz
    let updatedUsers = this.state.kullanicilar;

    updatedUsers = updatedUsers.filter((user) => user.id !== id);
    //! state direct immutable'dır
    //this.state.users = updatedUsers olarak değiştiremeyiz
    //setState kullanmalıyız. Reactın statin değiştiğini anlayabilmesi için
    this.setState({
      kullanicilar: updatedUsers,
    });
  }
  render() {
    return (
      <div className="container w-50">
        <h4>User App</h4>
        <hr />
        {/* adduser'a gönderme işlemi */}
        <AddUser addUser={this.addUser} />
        <hr />
        {/* gönderme işlemi */}
        <Sutunlar
          deleteUser={this.deleteUser}
          kullanicilar={this.state.kullanicilar}
        />
      </div>
    );
  }
}
export default App;

// function App() {
//   constructor(props) {
//         super(props);
//         this.state = {
//           users: [],
//         };
//       }
//   const title = " User App";
//   const isAuthorized = true;
//   return (
//     <div className="container">
//       <h4>User App</h4>
//       <hr />
//     </div>
//   );
// }
// export default App;
