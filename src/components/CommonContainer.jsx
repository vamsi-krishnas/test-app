import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const CommonContainer = ({children}) => {
    return (
        <Jumbotron className="text-align-center">
            <h1>{children}</h1>
        </Jumbotron>
    )
}