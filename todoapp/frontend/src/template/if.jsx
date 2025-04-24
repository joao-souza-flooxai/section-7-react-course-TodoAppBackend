import React from 'react';

export default function IF (props) {
    if (props.test) {
        return props.children;
    } else {
        return false;
    }
};