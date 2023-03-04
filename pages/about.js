import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LittleAboutMe from '@/components/LittleAboutMe.js';
import Frameworks from '@/components/Frameworks';
import Image from 'next/image';

export default function about() {
  return (
    <Container>
      <Row>
        <Col>
          <LittleAboutMe />
        </Col>
        {/* ADDING A SECOND COLUMN */}
        <Col>
          <h1>I'll add an Image Here</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>I'll add an Image Here</h1>
        </Col>
        {/* ADDING A SECOND COLUMN */}

        <Col>
          <h1>Technologies Faisal
            <span class="inline-flex items-baseline">
              <img src="/Myself.JPG" alt="" class="self-center w-7 h-7 rounded-full mx-1" />
            </span>
            Works With</h1>
          <Frameworks />
        </Col>
      </Row>
    </Container>
  )
}
