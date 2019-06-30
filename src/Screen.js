import React from 'react';


const Screen = ({ value, newValue, flag, score }) => {
    return (
        <div className="screen"><span className="screen__numbers">{flag ? newValue : value}{score}</span></div>
    );
}

export default Screen;