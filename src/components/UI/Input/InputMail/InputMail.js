import React from 'react';
import styles from './Input.module.scss';

function InputMail(props) {
    return (
        <input 
            type="text"
            placeholder="Adresse e-mail"
            className={styles.input}
        />
    );
}

export default InputMail;