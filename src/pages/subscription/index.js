import {React, useState} from 'react';
import styles from './Subscription.module.scss';
import WithOutSubscription from '../../HOC/withOutSubscription';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import { Done } from '@material-ui/icons';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PK}`);

function Subscription(props) {

    const [divClick1, setDivClick1] = useState(true);
    const [divClick2, setDivClick2] = useState(false);
    const [fontLeftRed, setFontLeftRed] = useState(false);
    const [fontRightRed, setFontRightRed] = useState(true);

    const handleClick1 = () => {
        setDivClick1(false);
        setDivClick2(true);
        setFontLeftRed(true);
        setFontRightRed(false);
    }

    const handleClick2 = () => {
        setDivClick2(false);
        setDivClick1(true);
        setFontLeftRed(false);
        setFontRightRed(true);
    }

    const handleConfirmation = async () => {
        const token = localStorage.getItem('token');
        const payload = {
          total: divClick1 ? 6000: 3000,
          subscription: divClick1 ? "Premium" : "Standard"
        }
        try {
          const stripe = await stripePromise;
          const response = await stripeService.createSession(token, payload);
          await stripe.redirectToCheckout({
            sessionId: response.id,
          });
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className={styles.div__subscription}>
            <NavAccount type="Subscribe"></NavAccount>
            <div className={styles.div__container}>
                <div className={styles.div__title}>
                    <h1>Sélectionnez le forfait qui vous convient</h1>
                    <p><Done></Done><span>Regardez autant que vous voulez. Sans publicité.</span></p>
                    <p><Done></Done><span>Recommandations personnalisées.</span></p>
                    <p><Done></Done><span>Changez ou annulez votre forfait à tout moment.</span></p>
                </div>
                <div className={styles.div__details}>
                    <div className={styles.div__type__subscription}>
                        <div className={`${styles.div__title__subscription} ${divClick1 && styles.div_opacity}`} onClick={handleClick1}>
                             <label>Standard</label>
                        </div>

                        <div className={`${styles.div__title__subscription} ${divClick2 && styles.div_opacity}`} onClick={handleClick2}>
                          <label>Premium</label>
                        </div>
                    </div>
                    <div className={styles.div__grid}>
                        <div className={`${styles.div__grid__child} ${styles.child__left}`}>Abonnement mensuel</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontLeftRed && styles.child__text__red}`}>30 €</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontRightRed && styles.child__text__red}`}>60 €</div>
                        <div className={`${styles.div__grid__child} ${styles.child__left}`}>Qualité vidéo</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontLeftRed && styles.child__text__red}`}>Meilleure</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontRightRed && styles.child__text__red}`}>Optimale</div>
                        <div className={`${styles.div__grid__child} ${styles.child__left}`}>Résolution</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontLeftRed && styles.child__text__red}`}>1080p</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${fontRightRed && styles.child__text__red}`}>4K+HDR</div>
                        <div className={`${styles.div__grid__child} ${styles.child__left} ${styles.child__bottom}`}>Netflix sur votre TV, ordinateur, smartphone et tablette</div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${styles.child__bottom} ${fontLeftRed && styles.child__text__red}`}><Done></Done></div>
                        <div className={`${styles.div__grid__child} ${styles.child__right} ${styles.child__bottom} ${fontRightRed && styles.child__text__red}`}><Done></Done></div>
                    </div>
                    <div className={styles.div__description}>
                        <p>La disponibilité de la HD (720p), de la Full HD (1080p), de l&apos;Ultra HD (4K) et de la HDR dépend de votre connexion Internet et des capacités de l&apos;appareil. Tous les contenus ne sont pas disponibles dans toutes les résolutions. Pour en savoir plus, veuillez consulter nos Conditions d&apos;utilisation.</p>
                        <p>Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez Netflix en simultané sur 4 appareils différents avec le forfait Premium, sur 2 avec le forfait Standard, et sur 1 avec le forfait Essentiel.</p>
                    </div>
                </div>
                <div className={styles.div__button}>
                    <button className={styles.button} onClick={handleConfirmation}>Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default WithOutSubscription(Subscription);