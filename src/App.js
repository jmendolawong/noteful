import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import STORE from './Store';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1>Noteful</h1>
        </header>
        <main className='main'>
          <Sidebar folders={STORE.folders}/>
          <Notes notes={STORE.notes}/>
        </main>
      </div>
    ); 
  }
}

export default App;
