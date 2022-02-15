import React from 'react';
import styles from './Profil.module.scss';
import SectionFacturation from '../../../components/section/SectionFacturation/SectionFacturation';
import SectionForfait from '../../../components/section/SectionForfait/SectionForfait';
import SectionParamestres from '../../../components/section/SectionParametres/SectionParamestres';
import withAuth from '../../../HOC/withAuth';
import NavLinks from '../../../components/navs/NavLinks/NavLinks';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';

function index(props) {
    return (
        <div className={styles.div__profil}>
            <NavAccount type="Profil"></NavAccount>
            <NavLinks user="walid"></NavLinks>
            <div className={styles.div__profil__compte}>
                <div>
                    <h1>Compte</h1>
                </div>
                <div className={styles.div__profil__compte__membre}>
                    <p>Membre depuis février 2021</p>
                </div>
            </div>
            <SectionFacturation></SectionFacturation>
            <SectionForfait></SectionForfait>
            <SectionParamestres></SectionParamestres>
        </div>
    );
}

export default withAuth(index);