import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SidebarList from './SidebarList/SidebarList';
import SidebarNotes from './SidebarNotes/SidebarNotes';
import NoteList from './NoteList/NoteList';
import Notes from './Notes/Notes';
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
              render={() => {
                return <SidebarList folders={STORE.folders} />
              }}
            />
            <Route
              path='/folder/:folderId'
              render={(props) => {
                return <SidebarList folders={STORE.folders} selected={props.match.params.folderId} />
              }}
            />
            <Route
              path='/notes/:noteId'
              render={({history}) => {
                return <SidebarNotes 
                onClickBack={() => history.goBack()}
                />
              }}
            />
          </section>
          <section className='main_section'>
            <Route
              exact path='/'
              render={() => {
                return <NoteList notes={STORE.notes} />
              }}
            />
            <Route
              path='/folder/:folderId'
              render={(props) => {
                return <NoteList
                  notes={STORE.notes.filter(note => note.folderId === props.match.params.folderId)}
                />
              }}
            />
            <Route
              path='/notes/:noteId'
              render={(props) => {
                return <Notes 
                  note={STORE.notes.filter(note => note.id === props.match.params.noteId)}
                />
              }}
            />
          </section>
        </main>
      </div >
    );
  }
}

export default App;
