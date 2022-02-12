import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { useRouter } from "next/router";
import authService from '../../services/auth.service';
import styles from './Account.module.scss';
import withAuth from '../../HOC/withAuth';
import NavAccount from '../../components/navs/NavAccount/NavAccount';

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

    return (
        <div className={styles.div__account}>  
            <NavAccount type="Account"></NavAccount>
            <div className={styles.test}></div>
        </div>
    );
}

export default withAuth(Account);