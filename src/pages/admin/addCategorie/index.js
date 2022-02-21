import React from 'react';
import styles from './AddCategorie.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';

function AddCategorie(props) {
    return (
        <div className={styles.div__add__categorie}>
            <NavAccount type="Edit"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <div className={styles.div__main__form}>
                    <div className={styles.div__title}>
                        <h1>Ajout des catégories</h1>
                    </div>
                    <form className={styles.form}>
                        <label>Titre: </label>
                        <input type="text"></input>
                        <input type="submit" value="Ajouter"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddCategorie;