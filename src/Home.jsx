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
      
  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add("schedule-loaded");
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

          <h2 className="form-title">We are excited to have you be a part of our special day!</h2>
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
                  <article>The celebration will begin with our ceremony at <b>4:00 PM</b>, and we ask guests
                    to arrive about 30 minutes before.
                  </article>
                  <br></br>
                  <span className="schedule-item">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Guest Arrival</span>
                  <span className="schedule-item"><svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink"> <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -4199.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M46,4046.5 C46,4043.467 48.467,4041 51.5,4041 C53.634,4041 55.484,4042.225 56.396,4044.006 C55.862,4044.013 55.341,4044.077 54.84,4044.191 C52.032,4044.826 49.826,4047.032 49.191,4049.84 C49.74,4050.221 50.392,4050.454 51.092,4050.525 C51.497,4048.274 53.274,4046.497 55.525,4046.092 C55.842,4046.035 56.167,4046 56.5,4046 C56.662,4046 56.819,4046.02 56.977,4046.036 C56.989,4046.189 57,4046.343 57,4046.5 C57,4049.533 54.533,4052 51.5,4052 C48.467,4052 46,4049.533 46,4046.5 M60.379,4045.09 C60.451,4045.55 60.5,4046.019 60.5,4046.5 C60.5,4046.89 60.467,4047.271 60.419,4047.647 C61.395,4048.641 62,4050 62,4051.5 C62,4054.533 59.533,4057 56.5,4057 C55,4057 53.641,4056.395 52.647,4055.419 C52.228,4055.007 51.884,4054.522 51.613,4053.994 C55.703,4053.933 59,4050.604 59,4046.5 C59,4042.358 55.642,4039 51.5,4039 C47.358,4039 44,4042.358 44,4046.5 C44,4049.891 46.252,4052.754 49.341,4053.681 C49.523,4054.281 49.771,4054.853 50.09,4055.379 C51.405,4057.547 53.779,4059 56.5,4059 C60.642,4059 64,4055.642 64,4051.5 C64,4048.779 62.547,4046.405 60.379,4045.09" id="rings-[#909]">
                    </path></g></g></g></svg>Ceremony</span>
                  <span className="schedule-item"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08063 1C2.40362 1 1.47127 2.93986 2.51889 4.24939L11 14.8508V21H6C5.44772 21 5 21.4477 5 22C5 22.5523 5.44772 23 6 23H18C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21H13V14.8508L21.4811 4.24939C22.5287 2.93986 21.5964 1 19.9194 1H4.08063ZM7.28063 7L4.08063 3H19.9194L16.7194 7H7.28063ZM8.88063 9L12 12.8992L15.1194 9L8.88063 9Z" fill="#0F0F0F"/>
                    </svg>Cocktail Hour</span>
                  <span className="schedule-item"><svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" 
	                   width="30px" height="30px" viewBox="0 0 512 512"  xmlspace="preserve">
                     <style type="text/css">
                     </style><g>
                    <path class="st0" d="M50.57,55.239C27.758,29.036-13.992,53.833,4.68,95.145c12.438,27.563,36.469,94.922,70.016,143.438
                      c33.563,48.516,69.328,43.328,105.453,55.078l25.953,13.422l177.547,204.204l35.906-31.234l0.188-0.156
                      c-5.25-6.047-166.719-191.782-230.563-265.204C125.992,142.02,61.664,68.004,50.57,55.239z"/>
                      <path class="st0" d="M476.664,93.551l-61.938,71.266c-3.969,4.563-10.859,5.031-15.422,1.063l-2.203-1.906
                      c-4.531-3.953-5.031-10.844-1.063-15.406l62.234-71.594c10.219-11.734,5.375-22.125-2.219-28.719
                      c-7.578-6.578-18.531-9.938-28.75,1.813l-62.234,71.594c-3.953,4.547-10.859,5.031-15.406,1.063l-2.188-1.906
                      c-4.563-3.953-5.047-10.859-1.094-15.406l61.953-71.266c18.297-21.031-12.297-46.375-30.156-25.828
                      c-21.391,24.594-59.156,68.031-59.156,68.031c-33,37.688-32.5,55.344-27.844,80.078c3.781,19.938,9.328,34.281-11.156,57.844
                      l-30.234,34.781l31.719,36.453l34.641-39.844c20.469-23.547,35.453-20.047,55.719-19.094c25.156,1.203,42.703-0.766,75.422-38.672
                      c0,0,37.766-43.469,59.156-68.063C524.305,99.286,494.945,72.536,476.664,93.551z"/>
                    <polygon class="st0" points="185.758,322.692 49.102,479.88 85.211,511.286 219.055,357.348 191.508,325.661 	"/>
                    </g></svg>Dinner</span>
                  <span className="schedule-item">
                  <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" 
	                   viewBox="0 0 512 512" xmlspace="preserve">
                    <g>
                      <g>
                        <path d="M197.632,346.139v140.977c0,9.121-2.949,17.548-7.935,24.397c1.591,0.319,3.235,0.488,4.919,0.488
                          c13.744,0,24.886-11.142,24.886-24.886V354.851C211.849,353.661,204.634,353.366,197.632,346.139z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M196.188,133.638l34.359,17.343l0.019-14.16c0.023-17.637-13.325-31.951-29.817-31.974l-39.175-0.803
                          c-17.059-0.35-30.686,13.375-30.729,30.414c-0.213,83.38,0,344.7,0,352.655c0,13.744,11.536,24.886,25.28,24.886
                          s24.886-11.142,24.886-24.886c0-8.067,0-179.177,0-187.23l16.62,0.264l15.314-43.954c-14.225-6.96-17.822-8.719-32.048-15.678
                          c-4.603-2.252-7.823-6.282-9.228-10.821l-10.09-33.043c-16.264-9.664-22.195-30.305-13.713-47.109
                          C156.819,131.803,178.457,124.688,196.188,133.638z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M378.261,455.049l-37.559-66.648v-14.701l-22.55-3.507v72.591l19.733,35.017c6.283,11.151,20.415,15.093,31.564,8.811
                          C380.6,480.329,384.543,466.198,378.261,455.049z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M255.208,360.403v128.228h-0.001c0,12.797,10.374,23.172,23.172,23.172s23.172-10.375,23.172-23.172v-121.02
                          L255.208,360.403z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M327.169,24.232c-21.846-3.397-42.3,11.56-45.695,33.395c-3.397,21.84,11.554,42.299,33.395,45.695
                          c21.844,3.397,42.3-11.558,45.695-33.395C363.961,48.087,349.009,27.629,327.169,24.232z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle cx="206.535" cy="43.905" r="43.905"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M296.423,232.083l-25.179-12.318l-8.11,8.481c-7.755,8.11-19.674,9.839-29.201,5.042
                          c-8.511-4.306-0.104-0.059-54.991-27.765l8.857,13.873c1.18,1.847,2.791,3.637,4.675,5.062c2.518,1.911-3.866-1.476,86.722,42.841
                          c9.721,4.756,21.464,0.732,26.222-8.995C310.174,248.581,306.148,236.841,296.423,232.083z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M357.48,149.742l-0.012-0.465c-0.326-12.209-8.666-21.951-19.479-23.633c-15.728-2.446-25.696-3.996-39.867-6.2
                          c-10.559-1.642-21.644,4.852-25.737,16.601l-5.987,17.184l29.313-10.048l-53.019,33.91l-54.542-27.531
                          c-8.944-4.513-19.849-0.924-24.362,8.018c-4.513,8.941-0.924,19.849,8.018,24.362l63.773,32.19
                          c5.667,2.86,12.48,2.581,17.943-0.912l61.73-39.481l-30.131,31.511l19.711,9.643c19.219,9.403,27.176,32.604,17.774,51.823
                          c-9.402,19.219-32.604,27.176-51.822,17.774l-42.82-20.949l-20.772,59.617c-2.227,6.391,1.487,13.207,7.642,14.165
                          c29.762,4.629,106.554,16.572,136.336,21.204c6.151,0.958,11.763-4.431,11.583-11.175L357.48,149.742z"/>
                      </g>
                    </g>
                    </svg>
                    Dancing</span>
                  <span className="schedule-item">
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5713 14.5L9.46583 18.4141M18.9996 3.60975C17.4044 3.59505 16.6658 4.33233 16.4236 5.07743C16.2103 5.73354 16.4052 7.07735 15.896 8.0727C15.4091 9.02443 14.1204 9.5617 12.6571 9.60697M20 7.6104L20.01 7.61049M19 15.96L19.01 15.9601M7.00001 3.94926L7.01001 3.94936M19 11.1094C17.5 11.1094 16.5 11.6094 15.5949 12.5447M10.2377 7.18796C11 6.10991 11.5 5.10991 11.0082 3.52734M3.53577 20.4645L7.0713 9.85791L14.1424 16.929L3.53577 20.4645Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    After-Party at The Domain</span>
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