import React from 'react';
import styles from './AddMovie.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import withAuthAdmin from '../../../HOC/withAuthAdmin';
import { getQueyries } from '../../../graphql/queries/queyries';
import { useQuery } from "@apollo/react-hooks";

function AddMovie(props) {
    const { loading, error, data } = useQuery(getQueyries);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    }

    return (
        <div className={styles.div__add__movie}>
            <NavAccount type="Edit"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <div className={styles.div__main__form}>
                    <div className={styles.div__title}>
                        <h1>Ajout des films</h1>
                    </div>
                    <form className={styles.form}>
                        <label >Titre: </label>
                        <input type="text" ></input>
                        <label>Description: </label>
                        <textarea cols="30" rows="15"></textarea>
                        <label>Lien vers l&apos;image: </label>
                        <input type="text"></input>
                        <label>Lien vers la vidéo: </label>
                        <input type="text"></input>
                        <label>Type: </label>
                        <input type="text" value="film" disabled="disabled"></input>
                        <label>Date de sortie: </label>
                        <input type="text"></input>
                        <label>Catégories: </label>
                        {
                            data.getCategories.map((categorie) => (
                                <div  className={styles.categories} key={categorie.id}>
                                    <input type="checkbox"  className={styles.categorie}></input>
                                    <label  className={styles.categorie}>{categorie.title} </label>
                                </div>
                            ))
                        }
                        <input type="submit" value="Ajouter"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withAuthAdmin(AddMovie);