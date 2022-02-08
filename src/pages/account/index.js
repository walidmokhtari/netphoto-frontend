import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { useRouter } from "next/router";
import authService from '../../services/auth.service';
import styles from './Account.module.scss';

import { getMovies } from "../../graphql/queries/movies";
import { useQuery } from "@apollo/react-hooks";

function Account(props) {
    const [user, setUser] = useState({});
    const router = useRouter();
    const { loading, error, data } = useQuery(getMovies);
    

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token != null) {
            authService.getUser(token)
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            router.push("/");
        }
    }, []);

    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);
    console.log(user);

    return (
        <div className={styles.div__account}>  
            <div className={styles.div__account__movies}>
             {
                 data.getMovies.map((movie) => (
                     <div>
                         {movie.title}
                         {movie.description}
                         {movie.type}
                     </div>
                 ))
             }
            </div>
            <div className={styles.div__account__info}>
                <p>{user.email}</p>
                <a href="/account/profil"><p>{user.firstName}</p></a>
            </div> 
        </div>
    );
}

export default Account;