import React, { useState, useEffect } from 'react';
import styles from './Wishlist.module.scss';
import NavAccount from '../../../components/navs/NavAccount/NavAccount';
import { PlayCircleFilledRounded, ThumbUpAltOutlined} from '@material-ui/icons';
import authService from '../../../services/auth.service';

import { getQueyries } from "../../../graphql/queries/queyries";
import { useQuery } from "@apollo/react-hooks";

function Wishlist(props) {
    const [user, setUser] = useState({});
    

    useEffect(() => {    
        const token = localStorage.getItem("token");
        authService
            .getUser(token)
            .then((data) => {
                setUser(data);
            })
            .catch((err) => console.log(err));
    }, []);

   
    const { loading, error, data } = useQuery(getQueyries);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        alert(error)
        return null;
    };
 
    
    return (
        <div className={styles.div__wishlist}>
            <NavAccount type="Account"></NavAccount>
            <div className={styles.div__main}>
                {
                data.getMovies.map((movie)=> (
                    user.wishlist?.map((id) => (
                        movie.id == id ? (
                            <div key={movie.id} className={styles.row__content}>
                                <img src={movie.image} className={styles.row__image} alt={movie.title}></img>
                                <div className={styles.row__info}>
                                    <div className={styles.row__buttons}>
                                        <div className={styles.row__buttons__left}>
                                            <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                            <ThumbUpAltOutlined className={styles.like}></ThumbUpAltOutlined>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                            ""

                    ))

                ))
                
                }
            </div>
        </div>
    );
}

export default Wishlist;