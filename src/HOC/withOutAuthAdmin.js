import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const WithOutAuthAdmin = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [noToken, setNoToken] = useState(false);
        

        useEffect(() => {
            const token = localStorage.getItem("token");
            if (token == null) {
                setNoToken(true);
            } else {
                authService
                .verifyToken(token)
                .then((data) => {
                    if (data.verify && data.admin) {
                        router.push("/admin/dashbord");
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

export default WithOutAuthAdmin;