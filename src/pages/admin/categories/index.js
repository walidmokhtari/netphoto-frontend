import React from 'react';
import styles from './Categories.module.scss';
import withAuthAdmin from '../../../HOC/withAuthAdmin';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import CardData from '../../../components/cards/CardData/CardData';
import MainAdmin from '../../../components/mains/MainAdmin/MainAdmin';

function Categories(props) {
    return (
        <div className={styles.div__categories}>
            <NavAccount type="Users"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <MainAdmin title="Gestion des catégories" type="Categorie"></MainAdmin>
            </div>
        </div>
    );
}

export default withAuthAdmin(Categories);