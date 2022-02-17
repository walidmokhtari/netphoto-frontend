import React from "react";
import styles from "./SuccesMessage.module.scss"

function SuccesMessage(props) {
    return (
        <div className={styles.div__succesMessage}>
            <p>{props.message}. <a href="/">Retour a l'accueil</a></p>
        </div>
    );
}

export default SuccesMessage;