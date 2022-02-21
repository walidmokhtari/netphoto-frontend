import React from 'react';
import styles from './MainAdmin.module.scss';
import CardData from '../../cards/CardData/CardData';
import { AddCircle } from '@material-ui/icons';

import { getQueyries } from '../../../graphql/queries/queyries';
import { useQuery } from "@apollo/react-hooks";

function MainAdmin(props) {

    const { loading, error, data } = useQuery(getQueyries);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    }
    //console.log(data)

    return (
        <div className={styles.div__main__right}>
            <div className={styles.div__title}>
                <h1>{props.title}</h1>
                <a href=""><AddCircle></AddCircle><p>Ajouter</p></a>
            </div>
            <div className={styles.div__elements}>
                <div className={styles.div__key}>
                    <p className={styles.id}>ID</p>
                    <p className={styles.title}>Title</p>
                </div>
                {
                    props.type == "Movie" ?(
                        data.getMovies.map((movie) => (
                            <CardData data={movie} type="Movie"></CardData>
                        )))
                    :
                        data.getCategories.map((categorie) => (
                            <CardData data={categorie} type="Categorie"></CardData>
                        ))
                }
                
                
            </div>
        </div>
    );
}

export default MainAdmin;