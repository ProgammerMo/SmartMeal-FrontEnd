import React from 'react';

class Register extends React.Component  {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
  }

  onNameChange = event => {
    this.setState({ name: event.target.value })
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  onRegister = event => {
    fetch('https://smart-meal-v1.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onChangeRoute('home');
      }
      else {
        this.setState({ error: user })
      }
    })
  } 

  render() {
    return (
      <div className='linkMainContainer signInContainer'>
          <div className='linkMainContainer shadow signInContainer'>
              <p className='text fontXBigger' >Register</p>
              <p className='text fontSmaller' >Name</p>
              <input className='signIn shadow  signInInput' onChange={ this.onNameChange } type='input' />
              <p className='text fontSmaller' >Email</p>
              <input className='signIn shadow  signInInput' onChange={ this.onEmailChange } type='input' />
              <p className='text fontSmaller' >Password</p>
              <input className='signIn shadow signInInput' onChange={ this.onPasswordChange } type='password' />
              <p className='text fontSmaller error' >{ this.state.error }</p>
              <button className='signIn signInButton shadow' onClick={this.onRegister} >Register</button>
          </div>
      </div>
    );
  }
}
  
export default Register;