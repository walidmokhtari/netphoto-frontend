import {React, useState} from 'react';
import styles from './AddCategorie.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import NavAdmin from '../../../components/navs/NavAdmin/NavAdmin';
import SuccesMessage from '../../../components/UI/SuccesMessage/SuccesMessage';
import withAuthAdmin from '../../../HOC/withAuthAdmin';
import { Categories } from '../../../graphql/mutations/mutations';
import { useMutation } from "@apollo/react-hooks";

function AddCategorie(props) {
    const [title, setTitle] = useState({});
   
    const [save, {loading, error, data}] = useMutation(Categories, {
        variables: {
            title: title.title
        }
    });

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    }

    return (
        <div className={styles.div__add__categorie}>
            <NavAccount type="Edit"></NavAccount>
            <div className={styles.div__main}>
                <NavAdmin></NavAdmin>
                <div className={styles.div__main__form}>
                    <div className={styles.div__title}>
                        <h1>Ajout des catégories</h1>
                    </div>
                    <form className={styles.form}>
                        <label>Titre: </label>
                        <input type="text" onChange={(e) => setTitle({...title, title: e.target.value})}></input>
                        <input type="submit" value="Ajouter" onClick={save}></input>
                    </form>
                    {
                        data ? 
                            <SuccesMessage message="Catégorie ajoutée avec succes" type="Admin"></SuccesMessage>
                        :
                            ""
                    }
                </div>
            </div>
        </div>
    );
}

export default withAuthAdmin(AddCategorie);