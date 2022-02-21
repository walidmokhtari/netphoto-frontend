import React from 'react';
import styles from './Movies.module.scss';
import withAuthAdmin from '../../../HOC/withAuthAdmin';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import CardData from '../../../components/cards/CardData/CardData';
import MainAdmin from '../../../components/mains/MainAdmin/MainAdmin';


function Movies(props) {
    return (
        <div className={styles.div__movies}>
            <NavAccount type="Users"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <MainAdmin title="Gestion des films" type="Movie"></MainAdmin>
            </div>
        </div>
    );
}

export default withAuthAdmin(Movies);