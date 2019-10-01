import React, { Component } from 'react';
import SidebarList from '../SidebarList/SidebarList';
//import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarList folders={this.props.folders}/>
        
      </div>
    );
  }
}

export default Sidebar;
