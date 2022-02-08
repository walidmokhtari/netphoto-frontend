import React from 'react';
import styles from "./SectionTextImage.module.scss";


function SectionTextImage(props) {
    return (
        <section className={styles.section}>
            <div className={styles.div__text}>
                <h1 className={styles.div__h1}>Regardez Netflix sur votre TV.</h1>
                <p className={styles.div__p}>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.</p>
            </div>
            <div className={styles.div__image__video}>
                <div >
                    <img src={props.imageLink} className={styles.image} />
                </div>
                <div className={styles.div__video} >
                    <iframe
                        className={styles.video} 
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="300"
                        height="200"
                        src={props.videoLink}
                        >
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default SectionTextImage;
