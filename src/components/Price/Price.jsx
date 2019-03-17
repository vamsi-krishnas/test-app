import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PriceAddress } from './PriceAddress.jsx';
import { PriceDetails } from './PriceDetails.jsx';
import { PriceButtons } from './PriceButtons.jsx';

export const Price = () => {
    return (
        <div className="price">
            <Row>
                <Col sm={2}>
                    <div className="price-circle"></div>
                </Col>
                <Col sm={4}>
                    <div className="price-heading">full pack</div>
                    <div className="price-movers">6 movers</div>
                    <div className="price-hours">4 hours</div>
                </Col>
                <Col sm={6} className="text-align-right position-relative">
                    <div className="price-rate">$1499</div>
                    <div className="price-sub-rate">$150 for each additional hours</div>
                </Col>
            </Row>
            <PriceAddress />
            <PriceDetails />
            <PriceButtons />
        </div>
    )
}