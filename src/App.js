import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SidebarList from './SidebarList/SidebarList';
import NoteList from './NoteList/NoteList';
import STORE from './Store';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Link to='/'>
          <header className='header'>
            <h1>Noteful</h1>
          </header>
        </Link>
        <main className='main'>
          <section className='sidebar'>
            <Route
              exact path='/'
              render={() =>
                <SidebarList folders={STORE.folders} />}
            />
            <Route
              path='/folders/:folderId'
              render={() =>
                <SidebarList folders={STORE.folders} selected={folderId} />}
            />
          </section>
          <section className='main_section'>
            <NoteList notes={STORE.notes} />
          </section>
        </main>
      </div >
    );
  }
}

export default App;
