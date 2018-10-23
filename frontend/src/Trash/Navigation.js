import React from 'react';
import className from 'classname';
import { withRouter, link} from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './src/App.css';


export default class Navigation extends React.Component {
  
     render() {

    const {params} = this.props.router;
        if (params.accountId.undefined) return null;
    
    return (
      <ul className ="pure-menu-list "> 
       {/* <li className ="pure-menu-list ">
       <Link to={} /></li> */}
          
      </ul>
    );
  }
}

  