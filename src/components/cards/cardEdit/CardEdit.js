import {React, useState, useEffect, useContext} from 'react';
import CartContext from '../../../context/CartContext';
import styles from './CardEdit.module.scss';
import authService from '../../../services/auth.service';
import SuccesMessage from '../../UI/SuccesMessage/SuccesMessage';


const CardEdit = (props) =>{
    const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);
    const {password} = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        authService
          .updateUser(token, user)
            .then((data) => {
                setSuccess(true);
                setUser(data.user);
                localStorage.setItem('firstName', data.user.firstName);
                localStorage.setItem('lastName', data.user.lastName);
                localStorage.setItem('email', data.user.email);
          })
          .catch((err) => console.log(err));
      };
    

    useEffect(() => { 
        const user = {
            firstName: localStorage.getItem("firstName"),
            lastName: localStorage.getItem("lastName"),
            email: localStorage.getItem("email"),
            password: ""
        }
        setUser(user);
    }, []);

    return (
        <div className={styles.div}>
            <h1>{props.title}</h1>
            <form className={styles.div__form} onSubmit={(e) => handleSubmit(e)}>
                {
                    props.page == "email" || props.page == "perso" ?
                        <input 
                            type={props.type} 
                            placeholder={props.page == "perso" ? "Prénom" : ""} 
                            value={props.page == "email" ? localStorage.getItem("email") : null}
                            onChange={ (e) => {
                                props.page == "perso" ?
                                    setUser({...user,firstName: e.target.value})
                                :
                                    null
                            }}
                            >
                        </input>
                    :
                    ""
                }
                <input 
                    type={props.type} 
                    placeholder={props.page == "perso" ? "Nom" : props.placeHolder}
                    onChange={ (e) => {
                        props.page == "email" ?
                            setUser({...user,email: e.target.value})
                        :   
                        (
                            props.page == "perso" ?
                                setUser({...user,lastName: e.target.value})
                            :
                                setUser({...user,password: e.target.value})
                        )
                          
                    }}
                    >
                </input>
                {
                    props.page != "perso"  ?
                        <input 
                            type={props.type} 
                            placeholder={`Confirmation du ${props.placeHolder}`}>
                        </input>
                    :
                        ""
                    
                }
                <div className={styles.div__buttons}>
                    <input type="submit" value="Enregistrer" className={styles.button1}></input>
                    <input type="submit" value="Annuler" className={styles.button2}></input>
                </div>
                {
                        success ? 
                            <SuccesMessage message={props.msgSucces}></SuccesMessage>
                        :
                            ""
                }
            </form>
        </div>
    );
}

export default CardEdit;