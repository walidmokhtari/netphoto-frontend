import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {

    return (
        <>
        <label>{props.label}</label>
        <input
            className={styles.input__}
            type={props.type}
            name={props.name}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.onChange} 
            minLength={props.minLength}
            pattern={props.pattern}
        />
        </>
    );
}

export default Input;