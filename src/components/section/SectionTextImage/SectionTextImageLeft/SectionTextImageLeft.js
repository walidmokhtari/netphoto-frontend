import React from 'react';
import styles from './SectionTextImageLeft.module.scss'

function SectionTextImageLeft(props) {
    return (
        <section className={styles.section}>
            <div className={styles.section__image}>
                <div >
                    <img src={props.imageLink} className={styles.image} />
                </div>
            </div>
            <div className={styles.section__text}>
                <h1 className={styles.section__h1}>{props.title}</h1>
                <p className={styles.section__p}>{props.description}</p>
            </div>
        </section>
    );
}

export default SectionTextImageLeft;