import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import config from '../config';
import { findNote }from '../notes-helper'; 

function deleteNoteRequest(noteId, callback) {
  fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
          throw new Error(err.status)
        })
      }
      return res.json()
    })
    .then(data => {
      callback(noteId)
    })
    .catch(err => {
      console.log(err)
    })
}

class Notes extends Component {
  static contextType = NotefulContext;

  render() {
    const { noteId } = this.props.match.params
    const { notes=[] } = this.context

    const thisNote = findNote(notes, noteId) || {}

    return (
      <div className="noteList">
        <div className="currentNote">
          <h2>{thisNote.name}</h2>
          <p>Modified on {thisNote.modified}</p>
          <button
            className='deleteNote'
            onClick={() => {
              deleteNoteRequest(noteId, this.context.deleteNote)
              this.props.history.push('/')
            }}>
            Delete Note
              </button>
        </div>
        <div className='noteContent'>
          <p>{thisNote.content}</p>
        </div>
      </div>
    );
  }
}

export default Notes;
