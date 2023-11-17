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
                   <article>Having you be a part of our wedding is already a gift, but if you would like to commemorate our milestone in an additional way,
                      you can refer to our registry. As our wedding date gets closer, there will be more items to choose between. Thank you for celebrating with us!</article>
                   <a id="registry-btn" className="cta" href="https://www.zola.com/registry/christopherandmeri" target="_blank">View Registry</a>
                 </Col>
             </Row>
           </Container> 
        </div>
    )
}