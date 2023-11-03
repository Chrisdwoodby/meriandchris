import React, {useState} from "react";
// import { Container } from "postcss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map from '../media/map.png';
import colorPallet from '../media/color-pallet.jpg';
import walking from '../media/walking.png';
import { ElfsightWidget } from 'react-elfsight-widget';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CarouselCaption from 'react-bootstrap/CarouselCaption';


export default function Home(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var end = new Date('04/06/2024 3:30 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'MARRIED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days ';
        document.getElementById('countdown').innerHTML += hours + ' hrs ';
        document.getElementById('countdown').innerHTML += minutes + ' mins ';
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);

    
  return (
      <div>
        <div className="home-banner">
          <Col className="bannerLeft" md={6}>

          <h2 className="form-title"><b>Please confirm your email address</b> so that we can let you know when it is time to RSVP.</h2>
            <ElfsightWidget className="form" widgetID="7c116791-a047-4a26-8dd8-2cb68dece206" />
          </Col>
          <Col className="bannerRight" md={6}>
              <div className="above-knot">
                 <span>Saturday, April 6, 2024</span>
              </div>
              <div className="below-knot">
                  <span>1000 Southcreek Dr <br></br>Round Rock, TX 78664</span>
              </div>
          </Col>
        </div>
        <div id="date-outer">
                <h2 className="headings">Countdown to Forever</h2>
                <span id="countdown"></span>
        </div>
        {/* <div className="home-paragraph ">
          <Container>
            <Row className="rowreverse">
              <Col>
                <h3 className="headings">The Venue | Kinningham House</h3>
              </Col>
              <Col md={6}>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="home-paragraph-2">
          <Container>
            <Row className="message-cols-home">
            <Col className="message-cols box shadow" md={5}>
                  <h3 className="headings">The Venue | Kinningham House</h3>
                  <article>
                  The NEW development features 6,700 square feet of indoor
                  and outdoor rental event space available for use by the
                  public this fall. The facility will also host numerous
                  Parks and Rec youth programs throughout the year. 
                  This $2.3 million rebuild of the facility is in 
                  Kinningham Park.
                  </article>
                  <button className="cta" onClick={handleShow}>View on Map</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className="map-modal">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9161.064091212387!2d-97.6591343937613!3d30.498757858866842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d032b5b45b53%3A0x1f2f7b9bf676172d!2sKinningham%20Park!5e0!3m2!1sen!2sus!4v1698382157778!5m2!1sen!2sus" ></iframe>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
              </Col>
              <Col className="message-cols box shadow" md={5}>
                  <h3 className="headings" id="what-to-wear">What to Wear</h3>
                  <article>
                    While it is not a requirement do do so, we are asking our guests 
                    to bring our color pallet alive by choosing to wear colors like
                    what you see here on our website! 
                  </article>
                  
                  <div className="color-pallet-container">
                    <div className="color-pallet yellow"></div>
                    <div className="color-pallet orange"></div>
                    <div className="color-pallet bright-pink"></div>
                    <div className="color-pallet blue"></div>
                    <div className="color-pallet green"></div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  )
}