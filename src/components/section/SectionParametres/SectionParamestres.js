import react from "react";
import styles from "./SectionParametres.module.scss"

import React from 'react';

function SectionParamestres(props) {
    return (
        <section className={styles.section__parent}>
            <div className={styles.div__left}>
                <h1>Paramètres</h1>
            </div>
            <div className={styles.div__right}>
                <a href="#">Participation à des tests</a>  
                <a href="#">Gérer les appareils autorisés pour le téléchargement</a>
                <a href="#">Activer un appareil</a>
                <a href="#">Activité de streaming récente</a>
                <a href="#">Se déconnecter de tous les appareils</a>
                <a href="#">Téléchargez vos données personnelles</a>
            </div>
        </section>
    );
}

export default SectionParamestres;