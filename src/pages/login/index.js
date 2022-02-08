import React, {useEffect, useState} from 'react';
import styles from './Login.module.scss'
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import Input from '../../components/UI/Input/Input';
import { useRouter } from "next/router";
import authService from '../../services/auth.service';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

function Login(props) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
            .then((data) =>{
                if(data.auth == false) {
                    setError(true);
                    setErrorMessage(data.message)
                    return false;
                }

                localStorage.setItem("token", data.token);
                router.push("/account");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={styles.div__login}>
            <form className={styles.div__card} onSubmit={(e) => handleSubmit(e)}>
                <h1>S'identifier</h1>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                />
                <Input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Mot de passe"
                     required={true}
                     onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                />
                <input className={styles.input__submit} type="submit" value="S'identifier" />
                <div className={styles.div__help}>
                    <p className={styles.div__textFirstConnection}>Première visite sur Netflix ?</p><a href="/register">Inscrivez-vous.</a>
                </div>
                

                {
                    error ? (
                        <ErrorMessage message={errorMessage}/>
                    )
                    :
                    ""
                }
            </form>
            
        </div>
    );
}

export default Login;