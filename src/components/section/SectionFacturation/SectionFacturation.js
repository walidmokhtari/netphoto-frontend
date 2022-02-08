import react from "react";
import styles from "./SectionFacturation.module.scss";

function SectionFacturation(props) {
    return (
        <section className={styles.div__parent}>
            <div className={styles.div__parent__left}>
                <h1>Abonnement et facturation</h1>
                <button type="button">Annuler l'abonnement</button>
            </div>
            <div className={styles.div__parent__right}>
                <div className={styles.div__parent__email}>
                    <div className={styles.div__email}>
                        <p>foudilabdelkarim@gmail.com</p>
                        <p className={styles.p__gray}>Mot de passe : ********</p>
                        <p className={styles.p__gray}>Téléphone : 07 85 31 06 43</p>
                    </div>
                    <div className={styles.div__email__link}>
                        <a href="#">Modifier l'adresse e-mail</a>
                        <a href="#">Modifier le mot de passe</a>
                        <a href="#">Modifier le numéro de téléphone</a>
                    </div>
                </div>
                <div className={styles.div__parent__paiement}>
                    <div className={styles.div__paiement}>
                        <p>•••• •••• •••• 6997</p>
                        <p>Prochaine date de facturation : 8 mars 2022.</p>
                    </div>
                    <div className={styles.div__paiement__link}>
                        <a href="#">Gérer les informations de paiement</a>
                        <a href="#">Ajouter un mode de paiement secondaire</a>
                        <a href="#">Détails de facturation</a>
                        <a href="#">Modifier le jour de facturation</a>
                    </div>
                </div>
                <div className={styles.div__parent__link}>
                    <div>
                    </div>
                    <div className={styles.div__link}>
                        <a href="#">Utiliser une carte cadeau ou un code de promotion</a>
                        <a href="#">Où acheter des cartes cadeaux ?</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionFacturation;