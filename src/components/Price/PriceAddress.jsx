import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const PriceAddress = () => {
    return (
        <Row className="price-address">
            <Col sm={9} xs={9}>
                <div className="from">From:<strong>4545 Smith Ln</strong></div>
                <div className="to">To:<strong>Local</strong></div>
            </Col>
            <Col sm={3} xs={3} className="text-align-right">
                <div className="day">2</div>
                <div className="month">feb</div>
            </Col>
        </Row>
    )
}