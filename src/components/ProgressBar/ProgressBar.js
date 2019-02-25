import React from 'react';
import './ProgressBar.css';

const progressBar = (props) =>{

    const filler = (props) => {
        return props.currentxp/props.levelxp;
    }

    return (
        <div>
            <div className="ProgressBar">
                <div className="Progress" style={{width: `${filler}%`}}></div>
            </div>
            <p>{props.currentxp}/{props.levelxp}</p>
        </div>
    );

}

export default progressBar

