import React, { useState, useEffect} from 'react';
import WithOutAuth from '../../HOC/withOutAuth';
import { useRouter } from 'next/router';
import styles from './Register.module.scss';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import Input from '../../components/UI/Input/Input';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import authService from '../../services/auth.service';
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import Link from 'next/link';

function Register(props) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token != null) {
            router.push("/account");
        }
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(user)
            .then((data) => {
                if (data.message) {
                    setError(true);
                    if (data.message) {
                        setErrorMessage("Email déja existant");
                        return false;
                    }
                    setErrorMessage(data);
                    return false;
                }
                localStorage.setItem("token", data.token);
                router.push("/account");
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setErrorMessage(err.message);
            });
    };

    return (
        <div className={styles.div__register}>
            <NavAccount type="Login"></NavAccount>
            <div className={styles.div__body}>
                <div className={styles.div}>
                    <h1>S&apos;inscrire</h1>
                    <form className={styles.div__form} onSubmit={(e) => handleSubmit(e)}>
                        <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Prénom"
                            required={true}
                            onChange={(e) => {
                              setUser({ ...user, firstName: e.target.value });
                            }}
                        />
                        <Input
                            type="text"
                            id="lasttName"
                            name="lastName"
                            placeholder="Nom"
                            required={true}
                            onChange={(e) => {
                              setUser({ ...user, lastName: e.target.value });
                            }}
                        />
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
                        <input className={styles.input__submit} type="submit" value="Enregistrer" />
                    </form>
                    <div className={styles.div__check}>
                        <div>
                            <input type="checkbox" />
                            <label>Se souvenir de moi</label>
                        </div>
                        <a href="">Besoin d&apos;aide?</a>
                    </div>
                    <div className={styles.div__login}>
                        <p>Vous avez un compte Netflix ? <Link href="/login">Connectez-vous.</Link></p>
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

export default WithOutAuth(Register);