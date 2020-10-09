import React from 'react';

const Tab = ({label, hotkey, isActive}) => (
    <div className={`tab${isActive ? ' active' : ''}`} data-hotkey={hotkey}>
        {label}
    </div>
);

export default Tab;