import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Register.module.scss';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import Input from '../../components/UI/Input/Input';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import authService from '../../services/auth.service';

function Register(props) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
            <TitlePage title="S'inscrire"/>
            <form className={styles.div__card} onSubmit={(e) => handleSubmit(e)}>
                
                <Input
                    type="text"
                    label="Prénom"
                    id="firstName"
                    name="firstName"
                    placeholder="Mon prénom"
                    required={true}
                    onChange={(e) => {
                      setUser({ ...user, firstName: e.target.value });
                    }}
                />
                
                <Input
                    type="text"
                    label="Nom"
                    id="lasttName"
                    name="lastName"
                    placeholder="Mon nom"
                    required={true}
                    onChange={(e) => {
                      setUser({ ...user, lastName: e.target.value });
                    }}
                />
                
                <Input
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Mon email"
                    required={true}
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                />
                
                <Input
                    type="password"
                    label="Mot de passe"
                    id="password"
                    name="password"
                    placeholder="Mon mot de passe"
                    required={true}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                />
                <input className={styles.input__submit} type="submit" value="M'inscrire" />

                    {
                    error ? (
                        <ErrorMessage message = {errorMessage} />
                    )
                    :
                    "" 
                    }
            </form>
        </div>
    );
}

export default Register;