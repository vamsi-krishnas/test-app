import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Icon } from '../../common/Icon.jsx';
import logo from './logo-brand.png';


export const Header = () => {
    return (
        <Row className="header">
            <Col sm={2} xs={2}>
                <Icon iconName="chevron-left" />
            </Col>
            <Col sm={1} xs={1}>
                <Icon iconName="home" />
            </Col>
            <Col sm={6} xs={6} style={{ textAlign: "center" }}>
                <img src={logo} alt="Logo" className="logo" />
            </Col>
            <Col sm={3} xs={3} className="text-align-right">
                <Icon iconName="phone" />
                <div>Call Us</div>
            </Col>
        </Row>
    )
}