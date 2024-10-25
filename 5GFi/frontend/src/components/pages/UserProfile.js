import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { FaUserCircle, FaBell, FaEnvelope, FaBars } from 'react-icons/fa';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const UserProfile = () => {


    return (
        <>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <Card className="" >
                    <Card.Img
                        variant="center"
                        src="../assetes/images/male-icon.png"
                        className="d-block mx-auto mt-4"
                        style={{ width: '150px', borderRadius: '50%', border: '2px solid black' }}
                    />
                    {/* <FaUserCircle /> */}
                    <Card.Body>
                        <Card.Text className="text-center">
                            User Name
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col xs={12} md={8} lg={8}>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Persnal Information">
                     {/* <UserInformation /> */}
                    </Tab>
                    <Tab eventKey="profile" title=" Payment Details">
                        {/* <CreditCardInfo /> */}
                    </Tab>
                    <Tab eventKey="contact" title="Plans Information">
                       You Active Plan
                    </Tab>
                    <Tab eventKey="Password" title="Change Password">
                       Change Password
                    </Tab>
                </Tabs>
            </Col>
</Row>

        </>
    );
}