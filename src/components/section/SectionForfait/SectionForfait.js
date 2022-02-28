import react from "react";
import styles from './SectionForfait.module.scss';

function SectionForfait(props) {
    return (
        <section className={styles.section__parent__details}>
            <div className={styles.div__details__left}>
                <h1>Détails du forfait</h1>
            </div>
            <div className={styles.div__details__right}>
                <h1>{localStorage.getItem("subscription")}</h1>
                <a href="#">Détails du forfait</a>
            </div>
            
        </section>
    );
}

export default SectionForfait;