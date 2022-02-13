import React, {useState, useEffect } from "react"; 
import styles from './RowAccount.module.scss';
import MovieImage from "../../../../public/background.jpg";
import { PlayCircleFilledRounded} from '@material-ui/icons';


import { getMovies } from '../../../graphql/queries/movies';
import { useQuery } from '@apollo/client';

function RowAccount(props) {
    const { loading, error, data } = useQuery(getMovies);

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
                        <div key={movie.id} className={styles.row__content}>
                            <img src={MovieImage.src} className={styles.row__image} alt={movie.title}></img>
                            <div className={styles.row__info}>
                                <div className={styles.row__buttons}>
                                    <div className={styles.row__buttons__left}>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                    </div>
                                    <div className={styles.row__buttons__right}>
                                        <PlayCircleFilledRounded></PlayCircleFilledRounded>
                                    </div>
                                </div>
                                <div className={styles.row__more}>
                                    <div className={styles.row__more__1}>
                                        <h1>Recommendé a 95%</h1>
                                    </div>
                                    <div className={styles.row__more__2}>
                                        <h1>Recommendé a 95%</h1>   
                                    </div> 
                                    <div className={styles.row__more__3}>
                                        <h1>Recommendé a 95%</h1>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RowAccount;