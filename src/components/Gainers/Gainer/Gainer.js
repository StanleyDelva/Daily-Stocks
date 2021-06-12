import React from 'react';
import Prices from '../../Prices/Prices.js';
import styles from '../../styles/styles.module.css';

const Gainer = ({slug, name}) => {

    return (
        <div className={styles.stock_container}>
            <div className={styles.stock_row}>
                <div className={styles.stock}>
                    <h2 className={styles.stock_h2}>{name}</h2>
                    <p className={styles.stock_slug}>{slug}</p>
                </div>
                <Prices slug={slug}/>
            </div>
        </div>
    );

} 

export default Gainer;