import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const PriceDetails = () => {
    return (
        <Row className="price-details">
            <Col sm={12}>
                <p>Other important details about your move</p>
                <ul>
                    <li>We will do all your packing</li>
                    <li>Cancel upto 48 hours before you move</li>
                    <li>etc</li>
                </ul>
            </Col>
        </Row>
    )
}