import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import SidebarItem from '../SidebarItem/SidebarItem';

class SidebarList extends Component {
  render() {
    return (
      <div className="sidebar_list">
        <ul className='folder_list'>
          {this.props.folders.map(folder => {
            return <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>
                {folder.name}
              </Link>
            </li>
          }
          )}
        </ul>
        <button type='submit' className='add'>Add Folder</button>
      </div>
    );
  }
}

export default SidebarList;
