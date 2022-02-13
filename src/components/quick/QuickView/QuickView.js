import React from 'react';
import styles from './QuickView.module.scss'
import { CloseOutlined} from '@material-ui/icons';

function QuickView(props) {
    return (
        <div className={`${styles.quick__view} ${props.popupStatus && styles.open}`}>
            <div className={styles.quick__view__header} style={props.qvStyle}>
                <div className={styles.quick__view__content}>
                    <h3 className={styles.quick__view__title}>{props.movie.title}</h3>
                    <p>
                        {props.movie.description}
                    </p>
                </div>
                <button className={styles.quick__view__close} onClick={props.functionPopup}><CloseOutlined></CloseOutlined></button>
            </div>
        </div>
    );
}

export default QuickView;