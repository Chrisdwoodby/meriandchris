import React, {useState} from "react";
// import { Container } from "postcss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photoshoot from '../media/photoshoot.png';
import { ElfsightWidget } from 'react-elfsight-widget';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Home(props) {

  window.addEventListener('scroll', function() {
    var element = document.querySelector('#date-outer');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("countdown-in-view");
    }

    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 0) {
    }
});

window.addEventListener('scroll', function() {
  var element = document.querySelector('.home-paragraph-2');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {

  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("boxes-loaded");
  }
});
window.addEventListener('scroll', function() {
  var element = document.querySelector('.home-paragraph-2');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
      
  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("boxes-loaded");
  }
});
window.addEventListener('scroll', function() {
  var element = document.querySelector('.schedule');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add("schedule-loaded");
  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
  }
});
window.addEventListener('scroll', function() {
  var element = document.querySelector('.home-paragraph-3');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
      
  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("where-to-stay-loaded");
  }
});


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

          <h2 className="form-title">We are excited to have you be<br></br> a part of our special day!</h2>
            <ElfsightWidget className="form" widgetID="7c116791-a047-4a26-8dd8-2cb68dece206" />
          <h2 className="form-subtitle"><b>Please confirm your email address</b> so that we can let you know when it is time to RSVP.</h2>
          </Col>
          <Col className="bannerRight" md={6}>
              <div className="above-knot">
                 <span >Saturday, April 6, 2024</span>
              </div>
              <div className="below-knot">
                  <span >1000 Southcreek Dr. <br></br>Round Rock, TX 78664</span>
              </div>
          </Col>
        </div>
        <div id="date-outer">
                <h2 className="headings countdown-title">Countdown to Forever</h2>
                <span id="countdown"></span>
        </div>
        <div className="schedule">
          <Container>
            <Row>
              <Col id="schedule" md={5} className="schedule-col">
                <div className="schedule-item-list fade-in-top">
                  <h2>The Schedule</h2>
                  <br></br>
                  <span className="schedule-item">Guest Arrival - <b>3:30 PM</b></span>
                  <span className="schedule-item">Ceremony - <b>4:00 PM</b></span>
                  <span className="schedule-item">Cocktail Hour - <b>Late Afternoon</b> </span>
                  <span className="schedule-item">Dinner - <b>Evening</b></span>
                  <span className="schedule-item">Dancing - <b>Evening</b></span>
                  <span className="schedule-item">After-Party at The Domain - <b>Late Evening</b></span>
                </div>
              </Col>
              <Col md={7} className="schedule-col-right">
                <img src={photoshoot}/>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-paragraph-2">
          <Container>
            <Row className="message-cols-home">
            <Col className="message-cols box shadow fade-in-left" md={5}>
                  <h3 className="headings">The Venue | Kinningham House</h3>
                  <article>
                  The Kinningham House is an event space situated within Kinningham Park and managed by the Round Rock Parks and Recreation Department. It includes both indoor space and covered outdoor space. The bay doors that run along two sides of the building can be opened to connect with the outdoors when the weather is pleasant. The space is used for youth programs throughout the year.
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
              <Col className="message-cols box shadow fade-in-right" md={5}>
                  <h3 className="headings" id="what-to-wear">What to Wear</h3>
                  <article>
                  We invite you to help us bring our wedding colors to life by wearing one of the pastel colors or deeper colors in the circles below. The dress code is dressy, encompassing dresses of any type, suits of any type, and button-down shirts or blouses with slacks or skirts.
                  </article>
                  
                  <div className="color-pallet-container">
                    <div className="color-pallet yellow"></div>
                    <div className="color-pallet orange"></div>
                    <div className="color-pallet bright-pink"></div>
                    <div className="color-pallet blue"></div>
                    <div className="color-pallet green"></div>
                    <div className="color-pallet dark-green"></div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="home-paragraph-3">
          <Container>
            <Row className="message-cols-home">
              <Col md={12} className="message-cols box shadow fade-in-bottom">
                  <h3 className="headings" id="accommodations">Tips for Accommodations</h3>
                  <article>
                  Round Rock is a city just north of Austin, so if you would prefer to 
                  stay near our venue, you can look at accommodations in either Round
                   Rock or north Austin, both of which are great areas. Three hotels 
                   near the venue with higher ratings on Hotels.com are
                   <a className="hotel-link" href="https://www.marriott.com/en-us/hotels/austn-towneplace-suites-austin-round-rock/overview/" target="_blank"> TownePlace Suites 
                   Austin Round Rock</a>, <a className="hotel-link" href="https://www.ihg.com/avidhotels/hotels/us/en/round-rock/ausav/hoteldetail" target="_blank">avid hotel Austin – Round Rock South</a>, and
                   <a className="hotel-link" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/round-rock/rndes/hoteldetail" target="_blank"> Holiday Inn Express and Suites Round Rock - Austin N</a>. Plus, you can find even more options on other sites.
                  </article> 
                  <br></br>
                  <article><b className="headings">After-Party:</b> We will be having an informal after-party at The Domain in north Austin (Rock Rose Avenue, Austin, TX 78758). Consider how this fits in with your plans to use a rideshare like Uber or Lyft or stay in a specific location. It may be more economical to take a late-night rideshare than to stay near The Domain.</article>   
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  )
}