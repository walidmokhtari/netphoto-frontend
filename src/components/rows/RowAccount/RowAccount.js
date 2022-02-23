import React, {useState, useEffect } from "react"; 
import styles from './RowAccount.module.scss';
import authService from '../../../services/auth.service';
import MovieImage from "../../../../public/13heures.jpg";
import Image from "../../../../public/DontLookUp.jpg";
import { PlayCircleFilledRounded, ThumbUpAltOutlined} from '@material-ui/icons';

import { getQueyries } from '../../../graphql/queries/queyries';
import { useQuery } from '@apollo/client';



function RowAccount(props) {
    const { loading, error, data } = useQuery(getQueyries);
    const [wishlist, setWishList] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {    
        const token = localStorage.getItem("token");
        
        if (wishlist.length != 0 ) {
            authService
            .updateWishListUser(token,{wishlist: wishlist})
              .then((data) => {
                  setUser(data.user); 
                  setWishList(data.user.wishlist)  
            })
            .catch((err) => console.log(err));
        }
        
        }, [wishlist]);

        if (loading) {
          return "loading...";
        }

        if (error) {
          console.log(error);
          return null;
        }


    return (
        <div className={styles.row}>
            <h2 className={styles.row__title}>{props.title}</h2>
            <div className={styles.row__images}>
                {
                    data.getMovies.map((movie) => (
                        movie.categories.map((categorie) => (
                            categorie.title == props.title ? 
                            (
                                <div key={movie.id} className={styles.row__content}>
                                    <img src={movie.image} className={styles.row__image} alt={movie.title}></img>
                                    <div className={styles.row__buttons__left}>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                        <p onClick={() => {
                                            alert("Le film a bien été ajouté a votre wishlist");
                                            wishlist.indexOf(movie.id) == -1 ? 
                                                setWishList([...wishlist,  movie.id])
                                            :
                                                wishlist.splice(wishlist.indexOf(categorie.id),1); return wishlist;
                                            
                                        }}>
                                        <ThumbUpAltOutlined></ThumbUpAltOutlined></p>
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

export default RowAccount;