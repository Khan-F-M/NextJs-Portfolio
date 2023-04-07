import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import { Col, Row, Container } from 'react-bootstrap';

export default function Frameworks() {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={3} md={4} xs={4}>
                    <Image fluid src='/frameworks/logo-nodejs.png' alt='NodeJs' width={65} height={65}/>
                </Col>
                <Col lg={3} md={4} xs={4}>
                    <Image fluid src='/frameworks/logo-nextjs.png' alt='NextJs' width={65} height={65}/>
                </Col>
                <Col lg={3} md={4} xs={4}>
                    <p className='fs-3'>EpxressJs</p>
                </Col>
            </Row>
            <br />
            <Row className='justify-content-center'>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-postgres.png' alt='PostGre' width={65} height={65}/>
                </Col>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-bootstrap.png' alt='Bootstrap' width={65} height={65} />
                </Col>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-vstudio.png' alt='Visual studio' width={65} height={65} />
                </Col>
            </Row>
            <br />
            <Row className='justify-content-center'>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-html5.png' alt='HTML 5' width={65} height={65}/>
                </Col>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-css.png' alt='CSS' width={47} height={47}/>
                </Col>
                <Col lg={3} md={4} xs={4} className='p-3'>
                    <Image fluid src='/frameworks/logo-javascript.png' alt='Javascript' width={60} height={60} />
                </Col>
            </Row>
        </Container>


    )
}
