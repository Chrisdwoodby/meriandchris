import React, {useState} from "react";
// import { Container } from "postcss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ElfsightWidget } from 'react-elfsight-widget';

export default function Home(props) {
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

          <h2 className="form-title">Please Confirm Your Email Address</h2>
            <ElfsightWidget className="form" widgetID="7c116791-a047-4a26-8dd8-2cb68dece206" />
          </Col>
          <Col className="bannerRight" md={6}>
              <div className="above-knot">
                 <span>Saturday April 6th 2024</span>
              </div>
              <div className="below-knot">
                  <span>1000 Southcreek Dr, Round Rock, TX 78664</span>
              </div>
          </Col>
        </div>
        <div id="date-outer">
                <h2>Countdown to Forever</h2>
                <span id="countdown"></span>
        </div>
        <div className="home-paragraph">
          <Container>
            <Row>
              <Col md={6}>
                  <h3>Heading Here</h3>
                  <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, soluta, ea totam architecto mollitia dicta
                    cupiditate impedit fugiat quod ipsa temporibus quos est
                    quo explicabo delectus accusantium tenetur. Autem, totam.
                  </article>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Container>
        </div>
      </div>
  )
}