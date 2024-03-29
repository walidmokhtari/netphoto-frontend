import React from "react";
import { Route } from 'next/dist/server/router';
import Head from "next/head";
import Button from "../UI/Button/Button";
import styles from "./MainLayout.module.scss";
import Footer from "../footer/Footer";


const MainLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>Netflix</title>
                <meta name="description" content="Clone Netflix by Walid MOKHTARI" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
                <link rel="icon" href="/icon.png"/>
            </Head>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default MainLayout;