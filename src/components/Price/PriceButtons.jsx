import React from 'react';
import { Button } from '../../common/Button';
import { Row, Col } from 'react-bootstrap';

export const PriceButtons = () => {
    return (

        <Row className="price-button">
            <Col sm={6} xs={6}>
                <Button>Book Now</Button>
            </Col>
            <Col sm={6} xs={6}>
                <Button>Call Us</Button>
            </Col>
            <Col sm={12}>
                <Button variant="secondary">Lock in rate for 48 hours</Button>
            </Col>
        </Row >

    )
}