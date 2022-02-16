import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const WithOutAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [noToken, setNoToken] = useState(false);
        

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token == null) {
                setNoToken(true);
            } else {
                console.log("I'am herreee :D")
                authService
                .verifyToken(token)
                .then((data) => {
                    if (data.verify) {
                        router.push("/account");
                    } 
                })
            }
         }, []);

         if (noToken){
            return <WrappedComponent {...props}/>;
         } else {
            return null;
         }
    };
};

export default WithOutAuth;