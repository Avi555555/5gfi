import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FaBars, FaTimes, FaTachometerAlt, FaUser, FaListUl } from 'react-icons/fa';
import { useCustomToggleClass } from '../../utils/toggleSidebar';
import { Link } from 'react-router-dom';
import './sidebar.css'






const Sidebar = () => {
    // const { sidebarClass, toggleSidebar } = useCustomToggleClass(); 

    // const [isOpen, setIsOpen] = useState(true);

   

    return (
        <div className= 'sidebar '>    

            <Nav className="flex-column" style={{ '--bs-nav-link-padding-y': 0 }}>
                <Nav.Link href="/dashboard">
                    <FaTachometerAlt /> <div className='sidebarText'>Dashboard</div>
                </Nav.Link>
                <Nav.Link href="#">
                    <FaUser /> <div className="sidebarText">Profile</div>
                </Nav.Link>
                <Nav.Link href="/tenant">
                    <FaListUl /> <div className="sidebarText">Tenant</div>
                </Nav.Link>
                    <Nav className="flex-column ms-3"> {/* Sub-links under Tenant */}
                        <Nav.Link as={Link} to="/tenant/sub1">
                            <div className="sidebarText">Sub Link 1</div>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tenant/sub2">
                            <div className="sidebarText">Sub Link 2</div>
                        </Nav.Link>
                </Nav>
                <Nav.Link href="#">
                    <FaListUl /> <div className="sidebarText">Policy</div>
                </Nav.Link>
              
            </Nav>
        </div>


    );
};
export default Sidebar;
