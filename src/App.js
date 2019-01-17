import React, { Component } from 'react';
import './App.css';
import routes from './routes';

class App extends Component {

  render() {

    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

// const googleAPIkey = 'AIzaSyANuNYquZpuJZaIlwOUtz2rAsTgspHXEQE';

export default App;
