import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  onSignIn = event => {
    fetch('https://smart-meal-v1.herokuapp.com/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
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
              <p className='text fontXBigger' >Sign In</p>
              <p className='text fontSmaller' >Email</p>
              <input className='signIn shadow  signInInput' onChange={ this.onEmailChange } type='input' />
              <p className='text fontSmaller' >Password</p>
              <input className='signIn shadow signInInput' onChange={ this.onPasswordChange } type='password' />
              <p className='text fontSmaller error' >{ this.state.error }</p>
              <button className='signIn signInButton shadow' onClick={this.onSignIn} >Sign In</button>
              <button className='signIn signInButton register' onClick={() => this.props.onChangeRoute('register')}>Register</button>
          </div>
      </div>
    );
  }
}
  
export default SignIn;