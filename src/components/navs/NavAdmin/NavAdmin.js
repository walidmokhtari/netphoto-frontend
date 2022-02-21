import React from 'react';
import styles from './NavAdmin.module.scss'
import {LocalMoviesRounded, CategoryRounded, HomeRounded } from '@material-ui/icons';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

function NavAdmin(props) {

    const router = useRouter();

    const goToHome = () => {
        router.push('/admin/dashbord');
    }

    const goToMovies = () => {
        router.push('/admin/movies');
    }

    const goToCategories = () => {
        router.push('/admin/categories');
    }


    return (
        <nav className={styles.nav__list}>
            <ul>
                <li onClick={goToHome}><HomeRounded></HomeRounded><p>Accueil</p></li>
                <li onClick={goToMovies}><LocalMoviesRounded></LocalMoviesRounded><p>Gestion des films</p></li>
                <li onClick={goToCategories}><CategoryRounded></CategoryRounded><p>Gestion des catégories</p></li>
            </ul>
        </nav>
    );
}

export default NavAdmin;