import React, { Component } from 'react';
import SidebarList from '../SidebarList/SidebarList';
//import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarList />
        <p>content</p>
      </div>
    );
  }
}

export default Sidebar;
