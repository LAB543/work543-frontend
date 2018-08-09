import React, { Component } from 'react';
import '../assets/App.css';

// Component
import Child from '../components/Child';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Create-React-App</h1>
        <div>
          <Child />
        </div>
      </div>
    );
  }
}

export default App;
