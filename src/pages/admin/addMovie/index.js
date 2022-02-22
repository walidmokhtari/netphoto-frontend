import {React, useEffect, useState} from 'react';
import { useRouter } from "next/router";
import styles from './AddMovie.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import withAuthAdmin from '../../../HOC/withAuthAdmin';
import { getQueyries } from '../../../graphql/queries/queyries';
import { Movies } from '../../../graphql/mutations/mutations';
import SuccesMessage from '../../../components/UI/SuccesMessage/SuccesMessage';
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import addCategorie from '../addCategorie';

function AddMovie(props) {
    
    const router = useRouter();
    const [movie, setMovie] = useState({});
    const [array, setArray] = useState([]);


    useEffect(() => {
        movie.categories = array;
    }, [array])


    const { loading, error, data } = useQuery(getQueyries);

    
    const [save, {loading: loading2,error: error2,data: data2}] =  useMutation(Movies, {
        variables: {
            title: movie.title,
            description: movie.description,
            image: movie.image,
            video: "test.mp4",
            type: "Film",
            publicationDate: movie.publicationDate,
            categories: array
        }
    });
    
    const loadings = loading || loading2;
    if (loadings) return (<p>loading...</p>);

    


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
                        <input type="text" onChange={(e) => setMovie({...movie, title: e.target.value})}></input>
                        <label>Description: </label>
                        <textarea cols="30" rows="15" onChange={(e) => setMovie({...movie, description: e.target.value})}></textarea>
                        <label>Lien vers l&apos;image: </label>
                        <input type="text" onChange={(e) => setMovie({...movie, image: e.target.value})}></input>
                        <label>Lien vers la vidéo: </label>
                        <input type="text" onChange={(e) => setMovie({...movie, video: e.target.value})}></input>
                        <label>Type: </label>
                        <input type="text" value="film" disabled="disabled"></input>
                        <label>Date de sortie: </label>
                        <input type="text" onChange={(e) => setMovie({...movie, publicationDate: e.target.value})}></input>
                        <label>Catégories: </label>
                        {  
                            data.getCategories.map((categorie) => (
                                <div  className={styles.categories} key={categorie.id}>
                                    <input type="checkbox"  className={styles.categorie} onChange={(e) => {array.indexOf(categorie.id) == -1 ? setArray([...array, categorie.id]) : array.splice(array.indexOf(categorie.id),1); return array}}></input>
                                    <label  className={styles.categorie}>{categorie.title}</label>
                                </div>
                            ))
                        }
                        <input type="submit" value="Ajouter"  onClick={save}></input>
                        {
                        data2 ? 
                            <SuccesMessage message="Film ajouté avec succes" type="Admin"></SuccesMessage>
                        :
                            ""
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withAuthAdmin(AddMovie);