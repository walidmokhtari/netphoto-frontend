import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <p>Coopyright @<span>Walid</span></p>
            <p>Email : mokhtariwalid@hotmail.com</p>
            <div className={styles.footer__social__icons}>
                <a href="https://github.com/walidmokhtari"><i className="fab fa-github-square fa-2x" ></i></a>
                <a href="https://www.facebook.com"><i className= "fab fa-facebook-square fa-2x"></i></a>
                <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </>
    );
}

export default Footer;