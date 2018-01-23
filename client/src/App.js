import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      users: [] 
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(responseObj => {
        console.log("obj:", responseObj )
        this.setState({ 
          users: responseObj.data
        })
      }
      );
  }

  changeName = e => {
    this.setState({
      users: []
    })
  }
  
  render() {
    console.log("frontend: ", this.state)
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default App;
