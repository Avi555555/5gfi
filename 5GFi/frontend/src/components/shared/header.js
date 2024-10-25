import React, { useState } from 'react';
import { Navbar, Nav, Button, Offcanvas, NavDropdown } from 'react-bootstrap';
import { FaUserCircle, FaBell, FaEnvelope, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { useCustomToggleClass } from '../../utils/toggleSidebar';



const Header = ({toggleSidebar}) => {
  return (
    <>

      <Navbar bg="dark" variant="dark" expand="lg" className="px-3" fixed="top">

        <Navbar.Brand href="#home" className="ms-3">
          <img
            src="assetes/images/logo_W.png" // Update the path to your logo image
            alt="MyApp Logo"
            style={{ height: '40px' }} // Adjust size as needed
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title={"Tenant"} id="tenant-dropdown">
            <NavDropdown.Item href="/userProfile">App List - Enterprise</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Admin & User Mgmt</NavDropdown.Item>
            <NavDropdown.Item href="/plans">Billing</NavDropdown.Item>
            <NavDropdown.Item href="/plans">Inventory</NavDropdown.Item>
            <NavDropdown.Item href="#">Stats</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#">Policy</Nav.Link>
          <Nav.Link href="#">Profile</Nav.Link>
        </Nav>
            

        <Nav className="ms-auto">
          <Nav.Link href="#home"><FaBell /></Nav.Link>
          <Nav.Link href="#services"><FaEnvelope /></Nav.Link>
          <NavDropdown
            title={<FaUserCircle style={{ fontSize: '1.5em' }} />} // User icon
            id="user-dropdown"
            align="end" // Aligns dropdown menu to the end
          >
            <NavDropdown.Item href="/userProfile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Change Password</NavDropdown.Item>
            <NavDropdown.Item href="/plans">Plans</NavDropdown.Item>
            <NavDropdown.Item href="/plans">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      {/* <Sidebar show={showSidebar} onHide={handleToggleSidebar } /> */}
    </>
  );
};

export default Header;