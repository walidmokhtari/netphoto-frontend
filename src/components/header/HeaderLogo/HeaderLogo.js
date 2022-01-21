import React from 'react';
import LogoImg from "../../../../public/logo.png";
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
          <img src={LogoImg.src} alt="Netphoto logo"/>
        </div>
    )
}

export default HeaderLogo;