import react from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
    return (
            <a href={props.href} className={styles.__button}>{props.value}</a>
    )
}

export default Button;
