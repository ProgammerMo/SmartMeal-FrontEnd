import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import MealList from './components/MealList/MealList';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import React, { Fragment } from 'react';

const particleSettings = {
  polygon: {
      enable: true,
      type: 'inside',
      move: {
          radius: 10
    },
  }
}

const initialState = {
  input: '',
  meals: [],
  route: 'signin',
  isSignedIn: false,
  user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  }
}

class App extends React.Component {
  constructor() {
    super(); 
    this.state = initialState;
  }
  
  loadUser = data => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  fetchMeals = calories => {
    fetch(
      `https://smart-meal-v1.herokuapp.com/meals/${ calories }`
    )
    .then(response => response.json())
    .then(data => {
      if (data.meals){
        this.setState({meals: data.meals})
        fetch('https://smart-meal-v1.herokuapp.com/search/', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(res => res.json())
        .then(entries => {
          this.setState(Object.assign(this.state.user, { entries: entries }))
        })
      }
      
    })
    .catch(() => {
      console.log("error");
    });
  }

  onInputChange = event => {
    this.setState({input: event.target.value});
  }
  onSubmit = click => {
    this.fetchMeals(this.state.input);
  }
  onChangeRoute = route => {
    if (route === 'home'){
      this.setState({ isSignedIn: true});
    }
    else if (route === 'signin') {
      this.setState(initialState);
    }

    this.setState({ route: route })
  }

  render() {
      return (
        <div className="App">
          <Particles params={{ particleSettings }} className='particles' />
          <Navigation onChangeRoute={this.onChangeRoute} isSignedIn={ this.state.isSignedIn }/>
          { this.state.route === 'signin' 
            ? 
              <SignIn loadUser={this.loadUser} onChangeRoute={this.onChangeRoute} />
            : 
              this.state.route === 'register'
              ?
                <Register loadUser={this.loadUser} onChangeRoute={this.onChangeRoute} />
              :
              <Fragment>
                  <Rank user={ this.state.user } />
                  <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                  { this.state.meals && <MealList meals={this.state.meals} />}
              </Fragment>
          }
        </div>
      );
    }
  } 

export default App;
