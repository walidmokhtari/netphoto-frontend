import React from 'react';
import styles from './NavAdmin.module.scss'
import {LocalMoviesRounded, CategoryRounded, HomeRounded } from '@material-ui/icons';


function NavAdmin(props) {
    return (
        <nav className={styles.nav__list}>
            <ul>
                <li><a href="/admin/dashbord"><HomeRounded></HomeRounded><p>Accueil</p></a></li>
                <li><a href="/admin/movies"><LocalMoviesRounded></LocalMoviesRounded><p>Gestion des films</p></a></li>
                <li><a href="/admin/categories"><CategoryRounded></CategoryRounded><p>Gestion des catégories</p></a></li>
            </ul>
        </nav>
    );
}

export default NavAdmin;