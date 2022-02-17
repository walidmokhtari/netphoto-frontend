import React from 'react';
import styles from './PersonalInformation.module.scss';
import NavAccount from '../../../../components/navs/NavAccount/NavAccount';
import CardEdit from '../../../../components/cards/cardEdit/CardEdit';
import withAuth from '../../../../HOC/withAuth';

function index(props) {
    return (
        <div className={styles.div}>
            <NavAccount type="Perso"></NavAccount>
            <CardEdit 
                placeHolder="Nouveau mot de passe" 
                type="text" 
                page="perso" 
                title="Modifier mes informations personnelles"
                msgSucces="Vos informations été modifié avec succès">
            </CardEdit>
        </div>
    );
}

export default withAuth(index);