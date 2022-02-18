import React from "react";
import styles from "./SuccesMessage.module.scss"
import Link from "next/link";

function SuccesMessage(props) {
    return (
        <div className={styles.div__succesMessage}>
            <p>{props.message}. <Link href="/">Retour a l&apos;accueil</Link></p>
        </div>
    );
}

export default SuccesMessage;