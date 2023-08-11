import React, {useState} from "react";
import logo from '../media/logo.png';
import menu from '../media/menu.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header-bar">
    {/* <Container>
        <Row> */}
            <Col className="header-logo-container" md="6">
              <img id="header-logo" src={logo}/>
            </Col>
            <Col className="nav-links" md="6" >
              {/* <a className="nav-link">About</a>
              <a className="nav-link">Contact</a> */}
              <a onClick={handleShow}><img id="menu-icon" src={menu}/></a>
            </Col>
        {/* </Row>
    </Container> */}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </Offcanvas>
   </div>
  )
}