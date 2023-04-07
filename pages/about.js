import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LittleAboutMe from '@/components/LittleAboutMe.js';
import Frameworks from '@/components/Frameworks';
import Image from 'next/image';

export default function about() {
  return (
    <Container md={6} lg={6}>
      <Row>
        <Col>
          <LittleAboutMe />
        </Col>
        <Col md={6} lg={6} className="d-flex justify-content-center">
          <Image src='/about/Vectors 1.jpg' alt='' width={500} height={250}/>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6} className="d-flex justify-content-center">
        <Image src='/about/Vectors 2.jpg' alt='' width={500} height={250}/>
        </Col>
        <Col>
          <h1>Technologies Faisal
            <span class="inline-flex items-baseline">
              <img src="/Myself.JPG" alt="" class="self-center w-7 h-7 rounded-full mx-1" />
            </span>
            Uses</h1>
          <Frameworks />
        </Col>
      </Row>
    </Container>
  )
}
