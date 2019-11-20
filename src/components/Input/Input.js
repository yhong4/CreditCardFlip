import React from 'react';
import './input.scss';


const Input = (props) => {
    return(
        <div className="panel-input-group">
            <label className="panel-label">{props.name}</label>
            <input onChange={props.onValueChange} className="panel-input" />
        </div>
    )
}

export default Input;