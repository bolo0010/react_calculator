import React from 'react';


const Screen = ({ value, newValue, flag, score, isEmpty }) => {
    return (

        <div className="screen"><span className="screen__numbers">{isEmpty ? "0" : null} {flag ? newValue : value} {score} </span></div>
    );
}

export default Screen;