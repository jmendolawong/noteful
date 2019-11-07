import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class SidebarList extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      <div className="sidebar_list">
        <ul className='folder_list'>
          {this.context.folders.map(folder => {
            return <li key={folder.id} className='sidebar_items'>
              <NavLink to={`/folder/${folder.id}`} activeStyle={{ background: 'blue' }}>
                <h2>{folder.name}</h2>
              </NavLink>
            </li>
          })}
        </ul>
        <Link to={'/addFolder'}>
          <button className='add'>Add Folder</button>
        </Link >
      </div >
    );
  }
}

export default SidebarList;
