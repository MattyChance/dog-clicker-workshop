import React, { Component } from 'react';
import logo from './logo.svg';
import Dog from './Dog';
import './App.css';

var dogList = [
  { id: 1,
    source: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?h=350&auto=compress',
    name: 'Max',
    sex: 'M'
  }, 
  {
    id: 2,
    source: 'https://images.pexels.com/photos/192550/pexels-photo-192550.jpeg?h=350&auto=compress',
    name: 'Gracie',
    sex: 'F'
  }, 
  {
    id: 3,
    source: 'https://images.pexels.com/photos/36436/dalmatians-dog-animal-head.jpg?h=350&auto=compress',
    name: 'Spotty McSpotface',
    sex: 'M'
  }, 
  {
    id: 4,
    source: 'https://images.pexels.com/photos/5018/animal-dog-pet-brown.jpg?h=350&auto=compress',
    name: 'Reginald',
    sex: 'M'
  }, 
  {
    id: 5,
    source: 'https://images.pexels.com/photos/239685/pexels-photo-239685.jpeg?h=350&auto=compress&cs=tinysrgb',
    name: 'Rosita',
    sex: 'F'
  }, 
  {
    id: 6,
    source: 'https://images.pexels.com/photos/119592/pexels-photo-119592.jpeg?h=350&auto=compress',
    name: 'Champ',
    sex: 'M'
  }
]

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Who's your woof?!</h2>
        </div>

        <div>
          <button>Show all</button>
          <button>Male</button>
          <button>Female</button>

          <ul>
            {dogList.map( (dog) => <Dog source={dog.source} name={dog.name} key={dog.id} gender={dog.sex}/>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
