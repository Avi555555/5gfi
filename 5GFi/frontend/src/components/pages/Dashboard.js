import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CustomCard } from '../../utils/Card';

const Dashboard = () => {
  const cardData = [
    {
      variant: 'bg-primary',
      title: 'Cloud information',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      variant: '',
      title: 'Selected services details',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      variant: '',
      title: 'Payment details',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      variant: '',
      title: 'Additional Info 1',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
    },

  ];


  return (
    <>
      <div className='heading-top'><h1>Tenant</h1></div>
      {/* <div className='' style={{ 'width': '95%', 'margin': '0 auto' }}>
                <Row className="justify-content-center">
                    {cardData.map((item, idx) => (
                        <Col key={idx} xs={12} md={6} lg={6} className="Clip-path d-flex justify-content-center mb-4">
                            <CustomCard
                                variant={item.variant}
                                title={item.title}
                                content= {item.description}
                                links={[
                                    { href: "#link1", text: "Read More..." }

                                ]}
                                className={''}
                            />
                        </Col>
                    ))}
                </Row>
            </div> */}

      <Container className='mt-5'>

        <Row>
          <Col>
          <div className='product-box-module'>
                  <h2>App List - Enterprise </h2>
                  <div className='content-pro'>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type</p>
                  </div>
                  <a className='bottom primary'>-- Read More</a>
              </div>
          </Col>
          <Col >
            <Row className='mb-4'>
              <Col xs={12} sm={6} md={6} lg={6}>
              <div className='product-box-module'>
                  <h2>Admin & user Mgmt  </h2>
                  <div className='content-pro'>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type</p>
                  </div>
                  <a className='bottom primary'>-- Read More</a>
              </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
              <div className='product-box-module'>
                <h2>Billing  </h2>
                <div className='content-pro'>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
                  <a className='bottom primary'>-- Read More</a>
              </div>
              </Col>
             
            </Row>
            <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div className='product-box-module'>
                <h2>Inventory   </h2>
                <div className='content-pro'>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
                  <a className='bottom primary'>-- Read More</a>
              </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
              <div className='product-box-module'>
                <h2>Stats   </h2>
                <div className='content-pro'>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
                  <a className=' bottom primary'>-- Read More</a>
              </div>
              </Col>
             
            </Row>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Dashboard;
