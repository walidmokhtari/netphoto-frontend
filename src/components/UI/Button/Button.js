import {react, useContext} from "react";
import styles from "./Button.module.scss";
import CartContext from "../../../context/CartContext";

const Button = (props) => {
    const {logout} = useContext(CartContext);
    return (
            props.onclick ? 
                <a onClick={logout} className={styles.__button}>{props.value}</a>
            : 
                <a href={props.href} className={styles.__button}>{props.value}</a>
    )
}

export default Button;
