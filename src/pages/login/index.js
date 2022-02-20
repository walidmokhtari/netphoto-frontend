import React, {useEffect, useState} from 'react';
import WithOutAuth from '../../HOC/withOutAuth';
import styles from './Login.module.scss'
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import Input from '../../components/UI/Input/Input';
import { useRouter } from "next/router";
import authService from '../../services/auth.service';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import FbImage from '../../../public/facebook.png';
import Link from 'next/link';

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
            <NavAccount type="Login"></NavAccount>
            <div className={styles.div__body}>
                <div className={styles.div}>
                    <h1>S&apos;identifier</h1>
                    <form className={styles.div__form} onSubmit={(e) => handleSubmit(e)}>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail ou numéro de téléphone"
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
                    </form>
                    <div className={styles.div__check}>
                        <div>
                            <input type="checkbox" />
                            <label>Se souvenir de moi</label>
                        </div>
                        <a href="">Besoin d&apos;aide?</a>
                    </div>
                    <div className={styles.div__facebook}>
                        <img src={FbImage.src}></img>
                        <a href="">S&apos;identifier avec facebook</a>
                    </div>
                    <div className={styles.div__inscription}>
                        <p>Première visite sur Netflix ? <Link href="/register">Inscrivez-vous.</Link></p>
                    </div>
                    <div className={styles.div__more}>
                        <p>Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n&apos;êtes pas un robot.</p>
                        <a href="">En savoir plus.</a>
                    </div>
                    {
                    error ? (
                        <ErrorMessage message={errorMessage}/>
                    )
                    :
                        ""
                    }
                </div>
            </div>
        </div>
    );
}

export default WithOutAuth(Login);