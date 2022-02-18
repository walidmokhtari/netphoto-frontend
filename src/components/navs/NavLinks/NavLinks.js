import {React , useContext, useEffect} from 'react';
import { useRouter } from "next/router";
import CartContext from "../../../context/CartContext";
import styles from './NavLinks.module.scss';
import Avatar from "../../../../public/avatar.png";
import { EditOutlined, PersonOutline, HelpOutline } from '@material-ui/icons';
import Link from 'next/link';

function NavLinks(props) {
    const {isShown, shown, logout} = useContext(CartContext);
    
    return (
        
        <nav className={`${styles.nav} ${isShown && styles.show}`} onMouseOut={shown}>
            <ul className={styles.nav__list}>
                <li className={`${styles.nav__item} ${styles.avatar}`}><img src={Avatar.src} alt="Avatar"></img><Link href=""><p>{localStorage.getItem("firstName")}</p></Link></li>
                <li className={styles.nav__item}><EditOutlined></EditOutlined><Link href="/account/profil"><p>Gérer le profil</p></Link></li>
                <li className={styles.nav__item}><PersonOutline></PersonOutline><Link href="/account/profil"><p>Compte</p></Link></li>
                <li className={styles.nav__item}><HelpOutline></HelpOutline><a href=""><p>Centre d&apos;aide</p></a></li>
                <li className={`${styles.nav__item} ${styles.logout}`}><a href="" onClick={logout} ><p>Déconnexion</p></a></li>
            </ul>
        </nav>
    );
}

export default NavLinks;