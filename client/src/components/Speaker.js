import React from 'react';

import {Card , Nav , Button , Row ,Col, Container, Image, ButtonToolbar} from  'react-bootstrap';

 function Speaker() {
    return (
      <div className="container">
      <h1 className="text-center" style={{marginTop:"30px"}}>Speakers</h1>
     
        <Row className="justify-content" >
        <Col xs={12} md={4} className="speaker-cols">
        <Card >
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
          <Card.Title className="text-center">Yash Bansal</Card.Title>
          <Card.Text className="text-center ">
            Technical Secratary
            </Card.Text>
            <Card.Text className="text-center ">
            <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
          <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
                  </Card.Text>
            <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
          
        </Card.Body>
      </Card>
        </Col>
        <Col xs={12} md={4} className="speaker-cols">
        <Card >
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
          <Card.Title className="text-center">Arsh Mittal</Card.Title>
          <Card.Text className="text-center ">
         General Secratary
           </Card.Text>
           <Card.Text className="text-center ">
           <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
         <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
                 </Card.Text>
                 <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
          
        </Card.Body>
      </Card>
        </Col>
        <Col xs={12} md={4} className="speaker-cols">
        <Card >
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
          <Card.Title className="text-center">Rohan Anand</Card.Title>
          <Card.Text className="text-center ">
            Joint Secratary
          </Card.Text>
          <Card.Text className="text-center ">
          <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
        <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
                </Card.Text>
                <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
                </Card.Body>
      </Card>
        </Col>
        </Row>
        <Row className="justify-content" style={{marginTop:"50px"}}>
        <Col xs={12} md={4} className="speaker-cols">
        <Card >
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
          <Card.Title className="text-center">Kush Gupta</Card.Title>
          <Card.Text className="text-center ">
            Management Secratary
          </Card.Text>
          <Card.Text className="text-center ">
          <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
        <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
                </Card.Text>
                <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
                </Card.Body>
      </Card>
        </Col>
        <Col xs={12} md={4} className="speaker-cols" >
            <Card >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
    <Card.Body>
        <Card.Title className="text-center"> Govind</Card.Title>
        <Card.Text className="text-center ">  Joint  Secratary        </Card.Text>  
        <Card.Text className="text-center ">
        <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
      <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
              </Card.Text>
              <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
              </Card.Body>
      </Card>
        </Col>
        <Col xs={12} md={4} className="speaker-cols">
        <Card >
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
          <Card.Title className="text-center"> Ritwik Mehta </Card.Title>
          <Card.Text className="text-center ">
          Marketing Secratary
          </Card.Text>
          <Card.Text className="text-center ">
          <a className="px-3"> <img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
        <a>  <img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
                </Card.Text>
                <ButtonToolbar style={{display:"flex",justifyContent:"center"}}> <Button variant="danger"  >Know more</Button></ButtonToolbar>
                </Card.Body>
      </Card>
        </Col>
        </Row>
        </div>
    );
  }

  export default Speaker;