import React from 'react';
import styles from './ErrorMessage.module.scss'

function ErrorMessage(props) {
    return (
        <div className={styles.div__errorMessage}>
            <p>{props.message}</p>
        </div>
    );
}

export default ErrorMessage;