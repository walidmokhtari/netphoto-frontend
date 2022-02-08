import React from 'react';
import styles from './Profil.module.scss';
import SectionFacturation from '../../../components/section/SectionFacturation/SectionFacturation';

function index(props) {
    return (
        <div className={styles.div__profil}>
            <div className={styles.div__profil__compte}>
                <div>
                    <h1>Compte</h1>
                </div>
                <div className={styles.div__profil__compte__membre}>
                    <p>Membre depuis février 2021</p>
                </div>
            </div>
            <SectionFacturation></SectionFacturation>
        </div>
    );
}

export default index;