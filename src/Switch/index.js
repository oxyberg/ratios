import React from 'react';

const Switch = ({title, isActive, clicked}) => (
    <label className="switch" onClick={clicked} htmlFor={title}>
        <input type="checkbox" checked={isActive} name={title} />
        <span className="slider"></span>
    </label>
);

export default Switch;