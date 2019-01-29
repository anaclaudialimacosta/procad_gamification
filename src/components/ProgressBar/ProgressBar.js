import React from 'react';
import './ProgressBar.css';

const progressBar = (props) =>{
    return (
        <div>
            <div className="ProgressBar">
                <p>{props.currentxp}/{props.levelxp}</p>
            </div>
        </div>
    );

}

export default progressBar

