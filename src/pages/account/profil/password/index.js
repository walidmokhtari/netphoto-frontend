import React from 'react';
import styles from './Password.module.scss';
import NavAccount from '../../../../components/navs/NavAccount/NavAccount';
import CardEdit from '../../../../components/cards/cardEdit/CardEdit';
import withAuth from '../../../../HOC/withAuth';

function index(props) {
    return (
        <div className={styles.div}>
            <NavAccount type="Password"></NavAccount>
            <CardEdit 
                placeHolder="Nouveau mot de passe" 
                type="password"
                page="password" 
                title="Modifier mon mot de passe" 
                msgSucces="Votre mot de passe a été modifié avec succès"
                minLength="8">
            </CardEdit>
        </div>
    );
}

export default withAuth(index);