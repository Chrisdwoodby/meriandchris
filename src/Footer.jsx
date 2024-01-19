import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../media/logo.png';
import zola from '../media/zola.png';
import hangout from '../media/hangout.png';
import Col from 'react-bootstrap/Col';

export default function Footer () {
    return (
      <div>
        <div className="footer-top">
           <Container className="footer-container">
             <Row>
                 <Col className="footer-logo-container" md="6">
                 <img id="zola-logo" src={hangout}/>
                 </Col>
                 <Col className="registry" md={6}>
                   <h3>Additional Options For Gathering</h3>
                   <article>We want to spend quality time with all of you, so we will be designating a time and place for two additional informal gatherings. One will be on Friday (April 5) in the early evening, and one will be on Sunday (April 7) during the late afternoon. 
<br></br><br></br>
<strong>Check back for details the week of the wedding</strong>, but it will be along the lines of meeting up at a park or brewery.</article>
                   {/* <a id="registry-btn" className="cta" href="https://www.zola.com/registry/christopherandmeri" target="_blank">View Registry</a> */}
                 </Col>
             </Row>
           </Container> 
           <Container className="footer-container">
             <Row className="rowreverse">
                 <Col className="registry" md={6}>
                   <h3>Our Registry</h3>
                   <article>Having you be a part of our wedding is already a gift, but if you would like to commemorate our milestone in an additional way,
                      you can refer to our registry. As our wedding date gets closer, there will be more items to choose between. Thank you for celebrating with us!</article>
                   <a id="registry-btn" className="cta" href="https://www.zola.com/registry/christopherandmeri" target="_blank">View Registry</a>
                 </Col>
                 <Col className="footer-logo-container" md="6">
              
                   <img id="zola-logo" src={zola}/>
                 </Col>
             </Row>
           </Container> 
        </div>
        <div className="footer-main">
          <img id="header-logo" src={logo}/>
        </div>
      </div>
    )
}