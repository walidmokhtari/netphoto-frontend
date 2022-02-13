import react from "react";
import styles from "./SectionText.module.scss";
import ButtonCommencer from "../../UI/Button/ButtonCommencer/ButtonCommencer";
import InputMail from "../../UI/Input/InputMail/InputMail";


function SectionText(props) {
    return (
        <section className={styles.section}>
            <div className={styles.section__elements}>
                <div className={styles.section__text}>
                    <h1>Films, séries TV et bien plus en illimité.</h1>
                    <h2>Où que vous soyez. Annulez à tout moment.</h2>
                    <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
                </div>
                <div className={styles.section__inputs}>
                    <input 
                        type="text"
                        placeholder="Adresse e-mail"
                        className={styles.input}
                    />
                    <a className={styles.button}>Commencer</a>
                </div>
            </div>
        </section>
    );
}

export default SectionText;