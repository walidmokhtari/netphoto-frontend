import react from "react";
import styles from './SectionForfait.module.scss';

function SectionForfait(props) {
    return (
        <section className={styles.section__parent__details}>
            <div className={styles.div__details__left}>
                <h1>Détails du forfait</h1>
            </div>
            <div className={styles.div__parent_mr}>
                <div className={styles.div__details__middle}>
                    <h1>Premium ULTRA HD</h1>
                </div>
                <div className={styles.div__details__right}>
                    <a href="#">Détails du forfait</a>
                </div>
            </div>
            
        </section>
    );
}

export default SectionForfait;