import react from "react";
import styles from "./SectionFacturation.module.scss"
import Link from 'next/link';
import VisaImage from '../../../../public/visa.svg'

function SectionFacturation(props) {
    return (
        <section className={styles.div__abonnement}>
            <div className={styles.div__left}>
                <h1>Abonnement et facturation</h1>
                <button type="button">Annuler l&apos;abonnement</button>
            </div>
            <div className={styles.div__right}>
                <div className={styles.div__parent__email}>
                    <div className={styles.div__email}>
                        <p className={styles.email}>{localStorage.getItem("email")}</p>
                        <p className={styles.p__gray}>Mot de passe : ********</p>
                        <p className={styles.p__gray}>Téléphone : 01 23 45 67 89</p>
                    </div>
                    <div className={styles.div__email__link}>
                        <Link href="/account/profil/email">Modifier l&apos;adresse e-mail</Link>
                        <Link href="/account/profil/password">Modifier le mot de passe</Link>
                        <Link href="/account/profil/personalInformations">Modifier le nom et prénom</Link>
                    </div>
                </div>
                <div className={styles.div__parent__paiement}>
                    <div className={styles.div__paiement}>
                        <div className={styles.div__icon}>
                            <p><img src={VisaImage.src}></img></p>
                            <p className={styles.visa__card}>•••• •••• •••• 4242</p>
                        </div>
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
                        <a href="#">Utiliser une carte cadeau ou un code de promotion</a>
                        <a href="#">Où acheter des cartes cadeaux ?</a>
                </div>
            </div>
        </section>
    );
}

export default SectionFacturation;