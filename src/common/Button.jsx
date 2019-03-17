import React from 'react';
import { Button as BootStrapButton } from 'react-bootstrap';

export const Button = ({ children, className, handleClick, ...restProps }) => {
    return (
        <BootStrapButton onClick={handleClick} {...restProps}>
            {children}
        </BootStrapButton>
    )
}