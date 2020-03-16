import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case('input'):
            inputElement = <input className={classes.InputElement} type="text" {...props}/>;
            break;
        case('textarea'):
            inputElement = <textarea name="" id="" cols="30" rows="10"/>;
            break;
        default:
            inputElement = <input/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;