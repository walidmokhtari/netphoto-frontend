import React from 'react';
import styles from "./SectionTextImage.module.scss";


function SectionTextImageRight(props) {
    return (
        <section className={styles.section}>
            <div className={styles.section__text}>
                <h1 className={styles.section__h1}>{props.title}</h1>
                <p className={styles.section__p}>{props.description}</p>
            </div>
            <div className={styles.section__image}>
                <div >
                    <img src={props.imageLink} className={styles.image} />
                </div>
            </div>
        </section>
    );
}

export default SectionTextImageRight;
