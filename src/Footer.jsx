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
                 <Col className="footer-logo-container" md="6">
                   <img id="header-logo" src={logo}/>
                 </Col>
                 <Col className="registry" md={6}>
                   <h3>Our Registry</h3>
                   <article>As our wedding date gets closer, there will be more items to choose between on our registry. Thank you for thinking about ways to commemorate our milestone!</article>
                   <a id="registry-btn" className="cta" href="https://www.zola.com/registry/christopherandmeri" target="_blank">View Registry</a>
                 </Col>
             </Row>
           </Container> 
        </div>
    )
}