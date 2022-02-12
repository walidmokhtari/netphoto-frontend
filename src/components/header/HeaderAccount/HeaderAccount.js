import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import styles from "./HeaderAccount.module.scss";
import { PlayArrowRounded } from '@material-ui/icons';
import { InfoOutlined } from '@material-ui/icons';

import { getMovies } from '../../../graphql/queries/movies';
import { useQuery } from '@apollo/client';

const HeaderAccount = () => {
    const [movie, setMovie] = useState({});
    const { loading, error, data } = useQuery(getMovies);

    useEffect(() => {

          if (loading) {
            return "loading...";
          }
        
          if (error) {
            console.log(error);
            return null;
          }
        
          setMovie(
            data.getMovies[parseInt(Math.random() * data.getMovies.length )]
          )
          
      },[])

      
      const headerStyle = {
        backgroundImage: "url(https://media.ouest-france.fr/v1/pictures/MjAyMTA5MzdiZjEzNTFiNWRkYmI4MTFlYmM5NmI0NGUxODg0NzM?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=60eede4e5efb316ce5123a786ed3ad595df9dc5468b0ad3ddbb18bdca63bca06)",
        backgroundSize: "cover",
        backgroundPosition: "center center",

      }
    

    return (
        <header className={styles.header} style={headerStyle}>
          <div className={styles.header__container}>
              <h1 className={styles.header__title}>{movie.title}</h1>
              <p className={styles.header__description}>
                {movie.description}
              </p>
              <div className={styles.header__buttons}>
                <button className={`${styles.header__button} ${styles.header__button__play}`}><PlayArrowRounded></PlayArrowRounded>Lecture</button>
                <button className={styles.header__button}><InfoOutlined></InfoOutlined>Plus d'info</button>
              </div>
          </div>
        </header>
    )
}

export default HeaderAccount;