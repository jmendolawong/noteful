import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import config from '../config';
import { findFolder } from '../notes-helper';
import { format } from 'date-fns';

function addNoteRequest(callback, name, content, folderId) {
  //need  wrest folderid to tie to folder

  const date = format(new Date(), 'MM/dd/yyyy');
  
  fetch(`${config.API_ENDPOINT}/notes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({name:name, modified:date, folderid:folderId, content:content})
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
      console.log(data)
      callback(data)
    })
    .catch(error => {
      console.log(error)
    })
}


export default class AddNote extends Component {
  static contextType = NotefulContext;

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const content = e.target.content.value;
    const folderId = e.target.whichFolder.value
    const folderName = findFolder(this.context.folders, folderId)
    console.log(folderName)
    addNoteRequest(this.context.addNote, name, content, folderId);
    this.props.history.push('/');
  }

  render() {
    return (
      <form className='addNote' onSubmit={e => this.handleSubmit(e)}>
        <h2>Add a new note</h2>
        <div className='form-group'>
          <label htmlFor='name'>Note name </label>
          <input type='text' name='name' id='name' required/>
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Note content </label>
          <textarea name='content' id='content'/>
        </div>
        <div className='form-group'>
          <label htmlFor='whichFolder'>Add to which folder? </label>
          <select name='whichFolder' id='whichFolder'>
            {this.context.folders.map(folder => 
              <option value={folder.id}>{folder.name}</option>
            )}
          </select>
        </div>
        <button onClick={e => this.props.history.push('/')}>
          Cancel
        </button>
        {' '}
        <button type='submit' className='note-button'>Save</button>
      </form>
    )
  }
}