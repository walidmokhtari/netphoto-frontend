import react from "react";
import styles from "./TitlePage.module.scss";

const TitlePage = (props) => {
    return (
        <h1 className={styles.title__page}>{props.title}</h1>
    );
}

export default TitlePage;