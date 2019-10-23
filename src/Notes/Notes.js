import React, { Component } from 'react';
//import './Main.css';

class Notes extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="noteList">
        <div className="currentNote">
          <h2>{this.props.note[0].name}</h2>
          <p>Modified on {this.props.note[0].modified}</p>
          <button>Delete Note</button>
        </div>
        <div className='noteContent'>
          <p>{this.props.note[0].content}</p>
        </div>
      </div>
    );
  }
}

export default Notes;
