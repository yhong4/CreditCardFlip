import React from 'react';


const Select = (props) => {
    return (
        <div>
            <label className="panel-label">{props.name}</label>
            <select onChange={props.onValueChange} className="panel-input"> 
                {
                    props.options.map((item, index) => {
                       return <option value={item} key={`${item}-${index}`}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;