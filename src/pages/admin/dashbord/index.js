import React from 'react';
import styles from './Dashbord.module.scss';
import Router, { useRouter } from 'next/router';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import { PersonRounded } from '@material-ui/icons';
import { LocalMoviesRounded } from '@material-ui/icons';
import { CategoryRounded } from '@material-ui/icons';
import { DataUsageRounded } from '@material-ui/icons';
import Link from 'next/link';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';

function Dashbord(props) {
    const router = useRouter();

    const goToMovies = () => {
        router.push('/admin/movies')
    }

    const goToCategories = () => {
        router.push('/admin/categories')
    }

    return (
        <div className={styles.div__dashbord}>
            <NavAccount type="Dashbord"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <div className={styles.div__elements}>
                    
                    <div className={styles.div__element} onClick={goToMovies}>
                        <div className={styles.div__icon}>
                            <LocalMoviesRounded></LocalMoviesRounded>
                        </div>
                        <div className={styles.div__text}>
                            Ajoutez, Modifiez ou supprimez un film
                        </div>
                    </div>
                    <div className={styles.div__element}  onClick={goToCategories}>
                        <div className={styles.div__icon}>
                            <CategoryRounded></CategoryRounded>
                        </div>
                        <div className={styles.div__text}>
                            Ajoutez, Modifiez ou supprimez une catégorie
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Dashbord;