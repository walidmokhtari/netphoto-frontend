import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from "next/router";
import CartContext from '../../context/CartContext';
import authService from '../../services/auth.service';
import styles from './Account.module.scss';
import withAuth from '../../HOC/withAuth';
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import NavLinks from '../../components/navs/NavLinks/NavLinks';
import HeaderAccount from '../../components/header/HeaderAccount/HeaderAccount';
import RowAccount from '../../components/rows/RowAccount/RowAccount';

import { getQueyries } from "../../graphql/queries/queyries";
import { useQuery } from "@apollo/react-hooks";

function Account(props) {
    const router = useRouter();
    const {isShown, shown, pass} = useContext(CartContext);
    const { loading, error, data } = useQuery(getQueyries);
    
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    }
    
    const token = localStorage.getItem("token");
    if (token != null) {
        authService.getUser(token)
        .then((data) => {
            localStorage.setItem('firstName', data.user.firstName);
            localStorage.setItem('lastName', data.user.lastName);
            localStorage.setItem('email', data.user.email);
            localStorage.setItem('subscription', data.user.subscription);
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        router.push("/");
    }

    
    return (
        <div className={styles.div__account}>  
            <NavAccount type="Account"></NavAccount>
            <NavLinks></NavLinks>
            <HeaderAccount movies={data.getMovies}></HeaderAccount>
            {
                data.getCategories.map((categorie) => 
                    <RowAccount title={categorie.title} key={categorie.id}></RowAccount>
                )
            }
        </div>
    );
}

export default withAuth(Account);