import React, { Component } from 'react';

class SidebarNotes extends Component {
  render() {
    const { onClickBack } = this.props;
    return (
      <div className="sidebar_list">
        <button type='button' onClick={onClickBack}>Go Back</button>
        <h2>Folder X</h2>
      </div>
    );
  }
}

export default SidebarNotes;
