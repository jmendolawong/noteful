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

        <header className='header'>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
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
                <SidebarList folders={STORE.folders} />}
            />
            <Route
              path='/notes/:noteId'
              render={(props) => {
                return <SidebarList />
              }}
            />
          </section>
          <section className='main_section'>
            <Route
              exact path='/'
              render={() =>
                <NoteList notes={STORE.notes} />}
            />
            <Route
              path='/folders/:folderId'
              render={(props) => {
                return <NoteList
                  notes={STORE.notes.filter(note => note.folderId === props.folderId)}
                />
              }}
            />

            <Route
              path='/notes/:noteId'
              render={(props) => {

              }}
            />
          </section>
        </main>
      </div >
    );
  }
}

export default App;
