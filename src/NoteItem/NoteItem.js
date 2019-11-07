import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import config from '../config'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

//import './Main.css';

function deleteNoteRequest(noteId, callback) {
  fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(r => {
      if (!r.ok) {
        return r.json().then(err => {
          throw new Error(err.status)
        })
      }
      return r.json()
    })
    .then(data => {
      callback(noteId)
    })
    .catch(err => {
      console.log(err)
    })
}

export default class NoteItem extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      <div className="noteItem">
        <li key={this.props.id}>
          <Link to={`/notes/${this.props.id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <p>Modified on
            <Moment format=' MM/DD/YYYY'>
              {this.props.modified}
            </Moment>
          </p>
          <button
            className='deleteNote'
            onClick={() => {
              deleteNoteRequest(this.props.id, this.context.deleteNote)
            }}>
            Delete Note
            </button>
        </li>
      </div>
    );
  }
}

NoteItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.string
};