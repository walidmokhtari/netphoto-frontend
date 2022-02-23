import {React, useState} from 'react';
import styles from './Admin.module.scss';
import { useRouter } from "next/router";
import authService from '../../services/auth.service';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import NavAccount from '../../components/navs/NavAccount/NavAccount';
import Logo from '../../../public/logo_n.png';
import WithOutAuthAdmin from '../../HOC/withOutAuthAdmin';

function Admin(props) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        authService.loginAdmin(user)
            .then((data) =>{
                if(data.auth == false) {
                    setError(true);
                    setErrorMessage(data.message)
                    return false;
                }

                localStorage.setItem("token", data.token);
                router.push("/admin/dashbord");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className={styles.div__admin}>
            <NavAccount type="Admin"></NavAccount>
            <div className={styles.div__login}>
                <div className={styles.div__title}>
                    <h1>S&apos;identifier</h1>
                </div>
                <div className={styles.div__bottom}>
                    <form className={styles.div__form} onSubmit={(e) => handleSubmit(e)}>
                        <input 
                            type="email" 
                            className={styles.input__text}
                            required={true}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$"
                            placeholder="E-mail" onChange={(e) => {setUser({ ...user, email: e.target.value });}}>
                        </input>
                        <input 
                            type="password" 
                            className={styles.input__text}
                            minLength="8" 
                            placeholder="Mot de passe" onChange={(e) => {setUser({ ...user, password: e.target.value });}}>
                        </input>
                        <input type="submit" value="S&apos;identifier" className={styles.input__submit}></input>
                    </form>
                    <div className={styles.div__logo}>
                        <img src={Logo.src}></img>
                        <h2>Admin</h2>
                    </div>
                </div>
                <div className={styles.div__error}>
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

export default WithOutAuthAdmin(Admin);