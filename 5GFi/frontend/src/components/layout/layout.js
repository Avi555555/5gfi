import React from 'react';
import Sidebar from '../shared/Sidebar';
import { Container, Row, Col } from "react-bootstrap";


import Header from '../shared/header';
import { useCustomToggleClass } from '../../utils/toggleSidebar';
import Breadcrumbs from '../../utils/Breadcrumb';



function Layout({ children }) {
    const { sidebarClass, toggleSidebar } = useCustomToggleClass();

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            {/* <div className={`layout-container ${sidebarClass}`}> */}
            <div className={`layout-container`}>
                <div className='bg-head'></div>
                {/* <Sidebar /> */}
                <div className='wrapper '>
                    {/* <Breadcrumbs  /> */}
                    <Container fluid mt-5>
                        <Row id="page-content-wrapper">
                            <Col>
                                <container>
                                    {children}
                                </container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Layout;
