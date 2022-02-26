import {React, useState, useEffect} from 'react';
import styles from './Confirmation.module.scss';
import authService from '../../../services/auth.service';
import WithOutSubscription from '../../../HOC/withOutSubscription';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import { Done } from '@material-ui/icons';
import Link from 'next/link';

function Confirmation(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token != null) {
        authService.getUser(token)
        .then((data) => {
            localStorage.setItem('subscription', data.user.subscription);
            localStorage.setItem('token', data.token);
            setUser(data.user);
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        router.push("/");
    }

    }, [])
    
    return (
        <div className={styles.div__confirmation}>
            <NavAccount type="Subscribe"></NavAccount>
            {
                user.subscription != "" ? (
                    <div className={styles.div__main}>
                        <Done></Done>
                        <p>Votre abonnement a bien été accepté</p>
                        <Link href="/account">Acceder a mon compte</Link>
                    </div>
                ): 
                (
                    <div className={styles.div__main}>
                        <Link href="/subscription">Cliquez ici pour choisir votre abonnement</Link>
                    </div>
                )
            }
            
        </div>
    );
}

export default WithOutSubscription(Confirmation);