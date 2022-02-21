import React from 'react';
import styles from './NavAdmin.module.scss'
import {LocalMoviesRounded, CategoryRounded, HomeRounded } from '@material-ui/icons';
import Link from 'next/link';


function NavAdmin(props) {
    return (
        <nav className={styles.nav__list}>
            <ul>
                <li><Link href="/admin/dashbord"><HomeRounded></HomeRounded><p>Accueil</p></Link></li>
                <li><Link href="/admin/movies"><LocalMoviesRounded></LocalMoviesRounded><p>Gestion des films</p></Link></li>
                <li><Link href="/admin/categories"><CategoryRounded></CategoryRounded><p>Gestion des catégories</p></Link></li>
            </ul>
        </nav>
    );
}

export default NavAdmin;