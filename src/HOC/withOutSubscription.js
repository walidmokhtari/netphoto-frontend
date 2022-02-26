import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const WithOutSubscription = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [noSubscription, setNoSubscription] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token == null) {
                router.push("/")
            } else {
                authService
                .verifyToken(token)
                .then((data) => {
                    if (data.verify && data.subscription == "") {
                        setNoSubscription(true);
                    } else {
                        router.push("/account")
                    }
                })
            }
         }, []);

         if (noSubscription){
            return <WrappedComponent {...props}/>;
         } else {
            return null;
         }
    };
};

export default WithOutSubscription;