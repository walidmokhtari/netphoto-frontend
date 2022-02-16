import React from 'react';
import styles from './CardEdit.module.scss';


const CardEdit = (props) =>{
    return (
        <div className={styles.div}>
            <h1>{props.title}</h1>
            <form className={styles.div__form}>
                {
                    props.page == "email" || props.page == "perso" ?
                        <input type={props.type} placeholder={props.page == "perso" ? "Nom" : ""} value={props.page == "email" ? localStorage.getItem("email") : null}></input>
                    :
                    ""
                }
                <input type={props.type} placeholder={props.page == "perso" ? "Prénom" : props.placeHolder}></input>
                {
                    props.page != "perso"  ?
                        <input type={props.type} placeholder={`Confirmation du ${props.placeHolder}`}></input>
                    :
                        ""
                    
                }
                <div className={styles.div__buttons}>
                    <input type="submit" value="Enregistrer" className={styles.button1}></input>
                    <input type="submit" value="Annuler" className={styles.button2}></input>
                </div>
            </form>
        </div>
    );
}

export default CardEdit;