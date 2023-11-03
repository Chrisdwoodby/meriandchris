import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../media/logo.png';
import Col from 'react-bootstrap/Col';

export default function Footer () {
    return (
        <div className="footer-main">
           <Container>
             <Row>
                 <Col></Col>
                 <Col className="footer-logo-container" md="6">
                   <img id="header-logo" src={logo}/>
                 </Col>
                 <Col></Col>
             </Row>
           </Container> 
        </div>
    )
}