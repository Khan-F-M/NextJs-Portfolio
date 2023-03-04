//THIS FILE IS THE DEFAULT "/" ROUTE IN NEXTJS
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function index() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 style={{
            textAlign: "center"
          }}>
            Hi!
            <br />
            I am Faisal Khan.
            <br />
            I am a Web Developer
            <br />
            <br />
            {/* <button className="bg-black hover:bg-sky-700 rounded font-extralight px-2 py-2 text-sky-50">RESUME</button> */}
            <Button>Resume</Button>
          </h1>

        </Col>
      </Row>
    </Container>
  )
}
