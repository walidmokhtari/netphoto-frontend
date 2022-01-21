import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <input
            className={styles.input__register}
            type={props.type}
            name={props.name}
            id={props.id}
            value={props.value}
            placeholder={props.placehoder}
            required={props.required}
            onChange={props.onChange}      
        />
        </>
    );
}

export default Input;