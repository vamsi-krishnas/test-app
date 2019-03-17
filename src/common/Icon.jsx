import React from 'react';

export const Icon = ({ iconName, children, ...restProps }) => {
    return (
        <i className={`fas fa-${iconName}`} {...restProps}>
         {children}
        </i>
    )
}