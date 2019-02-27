import React, { Component } from 'react';

import UserList from './Components/UserList';
import Form from './Components/Form';

class App extends Component {

  state = {
    users: [
      {
        firstName: 'Alice',
        lastName: 'Geary',
        score: 96
      },
      {
        firstName: 'John',
        lastName: 'Junge',
        score: 96
      },
      {
        firstName: 'Rob',
        lastName: 'Vera',
        score: 88
      }
    ]
  }

  addUser = (obj) => {
    // If user not exist, add to users array otherwise return
    if (this.state.users.some(user => user.firstName === obj.firstName && user.lastName === obj.lastName)) {
      alert('User already exist');
      return;
    }

    this.state.users.push(obj);

    this.setState({
      users: this.state.users.sort((a, b) => a.score === b.score ? a.lastName.localeCompare(b.lastName) : b.score - a.score)
    });
  }

  removeUser = (obj) => {
    this.setState({
      users: this.state.users.filter(user => user.firstName !== obj.firstName && user.lastName !== obj.lastName)
    });
  }

  render() {
    return (
      <div className="main">
        <Form addUser={this.addUser} />
        <UserList users={this.state.users} removeUser={this.removeUser} />
      </div>
    );
  }
}

export default App;
