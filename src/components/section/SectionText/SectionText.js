import react from "react";
import styles from "./SectionText.module.scss"
import Button from "../../UI/Button/Button"

function SectionText(props) {
    return (
        <section className={styles.section__elements}>
            <div className={styles.div__elements}>
                <div className={styles.section__text}>
                    <h1>Films, séries TV et bien plus en illimité.</h1>
                    <h4>Vous êtes prêts ?</h4>
                </div>
                
                <div className={styles.section__buttons}>
                    <Button value="S'inscrire" href="/register"/>
                    <Button value="Se connecter" href="/login"/>
                </div>
            </div>
        </section>
    );
}

export default SectionText;