
import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // let config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       'Access-Control-Allow-Origin': '*',
    //       }
    //     }
    const user = {
      name: this.state.name
    };
  

    axios.post(`http://15.207.7.54:8080/users/create-user`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}