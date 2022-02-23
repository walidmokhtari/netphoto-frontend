import React from 'react';
import styles from './Email.module.scss';
import NavAccount from '../../../../components/navs/NavAccount/NavAccount';
import CardEdit from '../../../../components/cards/cardEdit/CardEdit';
import withAuth from '../../../../HOC/withAuth';

function index(props) {
    return (
        <div className={styles.div}>
            <NavAccount type="Email"></NavAccount>
            <CardEdit 
                placeHolder="Nouvel e-mail" 
                type="email" 
                page="email" 
                title="Modifier mon adresse e-mail" 
                msgSucces="Votre adresse e-mail a été modifié avec succès"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$">
            </CardEdit>
        </div>
    );
}

export default withAuth(index);