import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <p>Coopyright @<span>Walid</span></p>
            <div className={styles.footer__social__icons}>
                <a href="https://twitter.com/"><i className="fab fa-twitter-square fa-2x" ></i></a>
                <a href="https://www.facebook.com"><i className= "fab fa-facebook-square fa-2x"></i></a>
                <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </>
    );
}

export default Footer;