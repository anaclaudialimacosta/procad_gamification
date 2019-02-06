import React from 'react';
import './ProgressBar.css';

const progressBar = (props) =>{
    return (
        <div>
            <div className="ProgressBar">
                <div className="Progress"></div>
            </div>
            <p>{props.currentxp}/{props.levelxp}</p>
        </div>
    );

}

export default progressBar

