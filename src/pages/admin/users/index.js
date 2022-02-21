import React from 'react';
import styles from './Users.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import CardData from '../../../components/cards/CardData/CardData';
import MainAdmin from '../../../components/mains/MainAdmin/MainAdmin';

function Users(props) {
    return (
        <div className={styles.div__users}>
            <NavAccount type="Users"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <MainAdmin title="Gestion des utilisateurs"></MainAdmin>
            </div>
        </div>
    );
}

export default Users;