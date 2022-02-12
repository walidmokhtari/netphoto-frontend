import React from 'react';
import styles from './Footer.module.scss';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Youtube from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__socials}>
                    <a href='#' className={styles.footer__social}><Facebook></Facebook></a>
                    <a href='#' className={styles.footer__social}><Instagram></Instagram></a>
                    <a href='#' className={styles.footer__social}><Twitter></Twitter></a>
                    <a href='#' className={styles.footer__social}><Youtube></Youtube></a>
                </div>
            </div>
            <ul className={styles.footer__links}>
                <li className={styles.footer__link}><a href='#' >FAQ</a></li>
                <li className={styles.footer__link}><a href='#' >Relations Investisseurs</a></li>
                <li className={styles.footer__link}><a href='#' >Modes de lecture</a></li>
                <li className={styles.footer__link}><a href='#' >Mentions légales</a></li>
                <li className={styles.footer__link}><a href='#' >Seulement sur Netflix</a></li>
                <li className={styles.footer__link}><a href='#' >Seulement sur Netflix</a></li>
                <li className={styles.footer__link}><a href='#' >Recrutement</a></li>
                <li className={styles.footer__link}><a href='#' >Conditions d'utilisation</a></li>
                <li className={styles.footer__link}><a href='#' >Nous contacter</a></li>
                <li className={styles.footer__link}><a href='#' >Compte</a></li>
                <li className={styles.footer__link}><a href='#' >Utiliser des cartes cadeaux</a></li>
                <li className={styles.footer__link}><a href='#' >Confidentialité</a></li>
                <li className={styles.footer__link}><a href='#' >Test de vitesse</a></li>
                <li className={styles.footer__link}><a href='#' >Presse</a></li>
                <li className={styles.footer__link}><a href='#' >Acheter des cartes cadeaux</a></li>
                <li className={styles.footer__link}><a href='#' >Informations légales</a></li>
            </ul>
            <div className={styles.footer__copy}>
                Netflix Clone By <span>Walid MOKHTARI</span> - Tous les droits sont réservés
            </div>
        </footer>
    );
}

export default Footer;