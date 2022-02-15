import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";

function Logout(props) {
    const router = useRouter();

    localStorage.removeItem("token");
    router.push("/");

    return (
        <div>
            loading...
        </div>
    );
}

export default Logout;