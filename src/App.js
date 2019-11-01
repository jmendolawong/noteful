import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SidebarList from './SidebarList/SidebarList';
import SidebarNotes from './SidebarNotes/SidebarNotes';
import NoteList from './NoteList/NoteList';
import Notes from './Notes/Notes';
//import STORE from './Store';
import './App.css';
import NotefulContext from './NotefulContext';
import config from './config';

class App extends Component {
  
  state = {
    folders: [],
    notes: [],
    error: null,
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder],
    })
  }

  handleDeleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => 
      note.id !== noteId
    )
    this.setState({notes: newNotes})
  }

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/notes`),
        fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesRes, foldersRes]) => {
            if (!notesRes.ok)
                return notesRes.json().then(e => Promise.reject(e));
            if (!foldersRes.ok)
                return foldersRes.json().then(e => Promise.reject(e));

            return Promise.all([notesRes.json(), foldersRes.json()]);
        })
        .then(([notes, folders]) => {
            this.setState({notes, folders});
        })
        .catch(error => {
            console.error({error});
        });
}


  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.addFolder,
      addNote: this.addNote,
      deleteNote: this.handleDeleteNote,
    }

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <nav className='sidebar'>
            <Route
              exact path='/'
              component={SidebarList} />
            <Route
              path='/folder/:folderId'
              component={SidebarList} />
            <Route
              path='/notes/:noteId'
              component={SidebarNotes} />
          </nav>
          <header className='header'>
            <Link to='/'>
              <h1>Noteful</h1>
            </Link>
          </header>
          <main className='main_section'>
            <Route
              exact path='/'
              component={NoteList} />
            <Route
              path='/folder/:folderId'
              component={NoteList} />
            <Route
              path='/notes/:noteId'
              component={Notes} />
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
