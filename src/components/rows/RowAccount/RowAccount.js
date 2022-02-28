import React, {useState, useEffect } from "react"; 
import styles from './RowAccount.module.scss';
import authService from '../../../services/auth.service';
import MovieImage from "../../../../public/13heures.jpg";
import Image from "../../../../public/DontLookUp.jpg";
import { PlayCircleFilledRounded, ThumbUpAltOutlined, CloseOutlined} from '@material-ui/icons';

import { getQueyries } from '../../../graphql/queries/queyries';
import { useQuery } from '@apollo/client';



function RowAccount(props) {
    const { loading, error, data } = useQuery(getQueyries);
    const [wishlist, setWishList] = useState([]);
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");
    const [popup, setPopup] = useState(false);
    const [videoLink, setVideoLink] = useState("");

    
    useEffect (() => {
        authService.getUser(token)
        .then((data) => {
            setUser(data.user);
        })
        .catch((err) => {
            console.log(err);
        })


    }, [])
    

    useEffect(() => {    
        if (wishlist.length != 0 ) {
            authService
            .updateWishListUser(token,{wishlist: wishlist})
              .then((data) => {
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

        
    function handleClick(value) {
        setVideoLink(value);
        popup ? setPopup(false) : setPopup(true);
    }

    return (
        <div className={styles.row}>
            <h2 className={styles.row__title}>{props.title}</h2>
            <div className={styles.row__images}>
                {
                    data.getMovies.map((movie) => (
                        movie.categories.map((categorie) => (
                            user.subscription == "Premium" ? (
                                categorie.title == props.title ? 
                                (
                                    <div key={movie.id} className={styles.row__content}>
                                        <img src={movie.image} className={styles.row__image} alt={movie.title}></img>
                                        <div className={styles.row__buttons__left}>
                                            <PlayCircleFilledRounded onClick={() => handleClick(movie.video)}></PlayCircleFilledRounded>
                                            <p onClick={() => {
                                                alert("Le film a bien été ajouté a votre wishlist");
                                                wishlist.indexOf(movie.id) == -1 ? 
                                                    setWishList([...wishlist,  movie.id])
                                                :
                                                    wishlist.splice(wishlist.indexOf(categorie.id),1); return wishlist;

                                            }}>
                                            <ThumbUpAltOutlined ></ThumbUpAltOutlined></p>
                                        </div>
                                    </div>
                                )
                                :
                                ""
                            )
                            :
                            (
                                (categorie.title == props.title && movie.publicationDate.indexOf("2022") == -1) ? 
                                (
                                    <div key={movie.id} className={styles.row__content}>
                                        <img src={movie.image} className={styles.row__image} alt={movie.title}></img>
                                        <div className={styles.row__buttons__left}>
                                            <PlayCircleFilledRounded onClick={() => handleClick(movie.video)}></PlayCircleFilledRounded>
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
                            )
                        ))
                    ))
                }
            </div>
            {
                popup ? (
                    <div className={`${styles.div__popup__lecture} ${popup && styles.div__popup__lecture__open}`}>
                        <button className={styles.quick__view__close} onClick={() => handleClick("")}><CloseOutlined></CloseOutlined></button>
                        <iframe className={styles.iframe} src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                ) : 
                ""
            }
            
        </div>
    );
}

export default RowAccount;