import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import SidebarList from './SidebarList/SidebarList'
import SidebarNotes from './SidebarNotes/SidebarNotes'

import NoteList from './NoteList/NoteList'
import Notes from './Notes/Notes'

import AddNote from './AddNote/AddNote'
import AddFolder from './AddFolder/AddFolder'

import './App.css'
import NotefulContext from './NotefulContext'
import config from './config'
import NotefulError from './NotefulError'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      error: null,
      folderName: '',
      noteName: ''
    }
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder],
    })
  }

  handleDeleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({ notes: newNotes })
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }),
      fetch(`${config.API_ENDPOINT}/folders`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }


  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
      deleteNote: this.handleDeleteNote,
    }

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <NotefulError>
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
          </NotefulError>
          <header className='header'>
            <Link to='/'>
              <h1>Noteful</h1>
            </Link>
          </header>
          <main className='main_section'>
            <NotefulError>
              <Route
                exact path='/'
                component={NoteList} />
              <Route
                path='/folder/:folderId'
                component={NoteList} />
              <Route
                path='/notes/:noteId'
                component={Notes} />

              <Route
                path='/addFolder'
                component={AddFolder} />
              <Route
                path='/addNote'
                component={AddNote} />
            </NotefulError>

          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}

