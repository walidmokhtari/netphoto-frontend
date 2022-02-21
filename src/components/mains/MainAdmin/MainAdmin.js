import React from 'react';
import styles from './MainAdmin.module.scss';
import CardData from '../../cards/CardData/CardData';
import { AddCircle } from '@material-ui/icons';
import Router, { useRouter } from 'next/router';

import { getQueyries } from '../../../graphql/queries/queyries';
import { useQuery } from "@apollo/react-hooks";

function MainAdmin(props) {

    const { loading, error, data } = useQuery(getQueyries);
    const router = useRouter();

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    }
    //console.log(data)
    const goToAddMovie = () => {
        router.push('/admin/addMovie')
    }

    const goToAddCategorie = () => {
        router.push('/admin/addCategorie')
    }

    return (
        <div className={styles.div__main__right}>
            <div className={styles.div__title}>
                <h1>{props.title}</h1>
                {
                    props.type == "Movie" ?
                        <div className={styles.a} onClick={goToAddMovie}><AddCircle></AddCircle><p>Ajouter</p></div>
                    :
                        <div className={styles.a} onClick={goToAddCategorie}><AddCircle></AddCircle><p>Ajouter</p></div>
                }
            </div>
            <div className={styles.div__elements}>
                <div className={styles.div__key}>
                    <p className={styles.id}>ID</p>
                    <p className={styles.title}>Title</p>
                </div>
                {
                    props.type == "Movie" ?(
                        data.getMovies.map((movie) => (
                            <CardData data={movie} type="Movie" key={movie.id}></CardData>
                        )))
                    :
                        data.getCategories.map((categorie) => (
                            <CardData data={categorie} type="Categorie" key={categorie.id}></CardData>
                        ))
                }
                
                
            </div>
        </div>
    );
}

export default MainAdmin;