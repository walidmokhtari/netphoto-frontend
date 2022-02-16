import React, { useEffect, useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { useRouter } from "next/router";
import CartContext from '../../context/CartContext';
import authService from '../../services/auth.service';
import styles from './Account.module.scss';
import withAuth from '../../HOC/withAuth';
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import NavLinks from '../../components/navs/NavLinks/NavLinks';
import HeaderAccount from '../../components/header/HeaderAccount/HeaderAccount';
import RowAccount from '../../components/rows/RowAccount/RowAccount';

import { getMovies } from "../../graphql/queries/movies";
import { useQuery } from "@apollo/react-hooks";

function Account(props) {
    const [user, setUser] = useState({});
    const router = useRouter();
    const {isShown, shown, logout} = useContext(CartContext);
    const { loading, error, data } = useQuery(getMovies);
    

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token != null) {
            authService.getUser(token)
            .then((data) => {
                setUser(data);
                console.log(data);
                localStorage.setItem("firstName",data.firstName);
                localStorage.setItem("lastName",data.lastName);
                localStorage.setItem("email",data.email);
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
            <NavLinks></NavLinks>
            <HeaderAccount></HeaderAccount>
            <RowAccount title="Tendances actuelles"></RowAccount>
            <RowAccount title="Top 10 en France aujourd'hui"></RowAccount>
            <RowAccount title="Films européens"></RowAccount>
            <RowAccount title="Films d'actions"></RowAccount>
            <RowAccount title="Documentaires"></RowAccount>
        </div>
    );
}

export default withAuth(Account);