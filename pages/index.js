//THIS FILE IS THE DEFAULT "/" ROUTE IN NEXTJS
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          </h1>
        </Col>
      </Row>
    </Container>
  )
}
