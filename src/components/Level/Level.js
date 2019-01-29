import React from 'react';
import './Level.css';

const componentLevel = (props) =>{
    return(
        <div className="Level">
        <p>{props.level}</p>
        </div>
    );
}

export default componentLevel