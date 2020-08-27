import React from 'react';

import {Row , Col,  Container} from  'react-bootstrap';
 function Contact() {
    return (
       <div className="contact bg-dark text-light">
        <Container>
        <div >
        <Row>
        <Col className="text-center py-4">
          <h4> The <br /> World wide <br /> Conference  </h4>  
          <p> MG Auditorium , xyz street , Thapar University    </p>
          
        </Col>
        <Col className="text-center py-5">
        <a> <img src="https://img.icons8.com/doodle/48/000000/facebook-new.png"/> </a>
       <a> <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
        <a><img src="https://img.icons8.com/color/48/000000/twitter-squared.png"/></a>
        <a><img src="https://img.icons8.com/fluent/48/000000/telegram-app.png"/></a>
        <p>+91-1234567890</p>
        </Col>
        </Row> 
        <p className="text-center "> Made with <span style={{color:"red"}}>❤ </span>by Yash and Arsh   </p>
        </div>
        </Container>
       </div>
    );
  }
  export default Contact;