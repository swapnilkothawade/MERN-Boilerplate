import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      isSignUp: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginSignUp = this.handleLoginSignUp.bind(this);
    this.onSignUp = this.onSignUp.bind(this);

  }

  componentDidMount() {
  }

  onSignUp(e) {
    e.preventDefault();
    fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("Logged in");
      });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit() {

  }

  handleLoginSignUp() {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp }
    });
    console.log(this.state.isSignUp);
  }

  render() {
    return (
      <>{this.state.isSignUp ? <div><div>Sign Up</div>
        <form onSubmit={this.onSignUp}>
          <div>Username
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input></div>
          <div>Email<input id="email" type="email" value={this.state.email} onChange={this.handleChange}></input></div>
          <div>Password<input id="password" value={this.state.password} type="password" onChange={this.handleChange}></input></div>
          <input type="submit" value="Submit" />
          <div><span onClick={this.handleLoginSignUp}>Login In</span></div>
        </form></div> : <div>
          <div>Login</div>
          <form onSubmit={this.handleSubmit}>
            <div>Username
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input></div>
            <div>Password<input id="password" value={this.state.password} type="password" onChange={this.handleChange}></input></div>
            <input type="submit" value="Submit" />
            <div><span onClick={this.handleLoginSignUp}>Sign Up</span>|<span>Forgot Password</span></div>
          </form></div>}

      </>
    );
  }
}

export default Home;
