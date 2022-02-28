import React, { useEffect, useContext } from "react";
import { useState } from "react";
import CartContext from "../../../context/CartContext";
import styles from './NavAccount.module.scss';
import LogoImg from "../../../../public/logo.png";
import Avatar from "../../../../public/avatar.png";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "../../UI/Button/Button";
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Notifications  from "@material-ui/icons/Notifications";
import Link from "next/link";

function NavAccount(props) {
    
    const [navBlack, setNavBlack] = useState(false);
    const [buttonMenu, setButtonMenu] = useState(false);
    const {shown, logout} = useContext(CartContext);


    
    const transitionNav  = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };
    const handleClick = () => {
        buttonMenu ? setButtonMenu(false) : setButtonMenu(true);
    }
    if (process.browser) {
        document.addEventListener("scroll", transitionNav);
    }


    return (
        <div 
        className={`${styles.nav} ${navBlack || buttonMenu || props.type == "Profil" || props.type == "Email" || props.type == "Password" || props.type == "Perso" || props.type == "Admin" || props.type == "Dashbord" || props.type == "Users" || props.type == "Edit"? styles.nav__black : ""} 
        ${buttonMenu && styles.parent} ${props.type == "Home" || props.type == "Login" && styles.nav__fixed}`}
        >
            {
                props.type == "Account" ?
                <button className={styles.nav__button} onClick={handleClick}>
                    <MenuIcon></MenuIcon>
                </button>
                :
                ""
            }
            
            <Link href="/" ><img className={styles.nav__logo} src={LogoImg.src} alt="Netflix logo"></img></Link>
            {
                props.type == "Account" ?
                    <nav className={styles.nav__links}>
                        <Link href="/" >Accueil</Link>
                        <Link href="/" >Films</Link>
                        <Link href="/account/wishlist" >Wishlist</Link>
                    </nav>
                    :
                    ""
            }
            
            <div className={styles.nav__actions}>
                {
                props.type == "Account" ?
                    <div>
                        <a href="#" className={styles.nav__action}><SearchIcon></SearchIcon></a>
                        <a href="#" className={styles.nav__action}><CardGiftcard></CardGiftcard></a>
                        <a href="#" className={styles.nav__action}><Notifications></Notifications></a>
                    </div>
                    :
                    ""
                }
                {
                props.type == "Account" || props.type == "Profil" ?
                    <a href="#" className={styles.nav__action} onMouseEnter={shown} onClick={shown}>
                        <img src={Avatar.src} alt="Avatar"></img>
                        <span>&#9660;</span>
                    </a>
                    :
                    ""
                }
                
                {
                        props.type == "Edit" || props.type == "Users" || props.type == "Dashbord" || props.type == "Subscribe" ?
                            <Button value="Se déconnecter" onclick={true}></Button>
                        :
                            ""
                }
                
                {
                    props.type == "Home" ?
                        <Button value="S'identifier" href="/login"></Button>
                    :
                        ""
                }
                
            </div>
        </div>
    );
}

export default NavAccount;