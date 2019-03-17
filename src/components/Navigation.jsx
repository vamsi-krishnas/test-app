import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Navigation = ({ NavItems }) => {
    console.log(window.location.pathname)
    return (
        <Row className="nav-container">
            {
                NavItems.map(({ text, url }, key) =>
                    <Col sm={2} xs={2} className="nav-content" key={key}>
                        <div className={`nav-item ${window.location.pathname === url ? 'active' : ''}`}>
                            <a
                                className={`nav-link-item`}
                                href={url}
                            >
                                {text}
                            </a>
                        </div>
                    </Col>
                )
            }
        </Row>
    )
}