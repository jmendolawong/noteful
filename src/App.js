import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1>Noteful</h1>
        </header>
        <main className='main'>
          <Sidebar />
          <Main />
        </main>
      </div>
    ); 
  }
}

export default App;
