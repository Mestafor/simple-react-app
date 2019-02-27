import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  static propTypes = {
    addUser: PropTypes.func.isRequired
  };

  state = {
    firstName: '',
    lastName: '',
    score: 0,
  };

  onChange = (e) => {
    const target = e.target;
    // TODO: validate each input

    this.setState({
      [target.name]: target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.validateData() ?
      this.props.addUser(
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          score: parseInt(this.state.score, 10)
        }
      ) :
      alert('Incorrect values');
  }

  validateData() {
    // TODO: create ErrorField Class to show error for each field

    const firstName = typeof this.state.firstName === 'string' && this.state.firstName.length > 2;
    const lastName = typeof this.state.lastName === 'string' && this.state.lastName.length > 2;
    const score = typeof parseInt(this.state.score, 10) === 'number' && this.state.score >= 0 && this.state.score <= 100;

    return firstName && lastName && score;
  }

  render() {
    return <form onSubmit={this.onSubmit} onChange={this.onChange}>
      <fieldset>
        <input type="text" name="firstName" placeholder="First Name" defaultValue='' />
      </fieldset>
      <fieldset>
        <input type="text" name="lastName" placeholder="Last Name" defaultValue='' />
      </fieldset>
      <fieldset>
        <input type="number" min="0" max="100" name="score" placeholder="Score" defaultValue={0} />
      </fieldset>
      <fieldset>
        <input type="submit" value="Add/Update User" />
      </fieldset>
    </form>
  }
}

export default Form;
