import {React, useState} from 'react';
import styles from './CardData.module.scss';
import { EditOutlined, DeleteOutline } from '@material-ui/icons';

function CardData(props) {
    
    return (
        <div className={styles.div__element}>
            <p>{props.data.id}</p>
            <p className={styles.title}>{props.data.title}</p> 
        </div>
    );
}

export default CardData;