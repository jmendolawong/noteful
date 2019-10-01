import React, { Component } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

class SidebarList extends Component {
  render() {
    return (
      <div className="sidebar_list">
        <ul className='folder_list'>
          {this.props.folders.map(folder => 
            <li key={folder.id}>
              {folder.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SidebarList;
