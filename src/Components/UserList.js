import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired,
    removeUser: PropTypes.func.isRequired
  };

  onDelete = (data) => (e) => {
    this.props.removeUser(data);
  }

  renderTable = () => {
    return <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th></th>
        </tr>
        {this.props.users.map(this.renderTr)}
      </tbody>
    </table>;
  }

  renderTr = (data) => {
    return <tr key={JSON.stringify(data)}>
      <td>{data.lastName}, {data.firstName}</td>
      <td>{data.score}</td>
      <td><button onClick={this.onDelete(data)}>Delete</button></td>
    </tr>;
  }

  render() {
    return this.renderTable();
  }

}

export default UserList;