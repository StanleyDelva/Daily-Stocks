import React, { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';


const Prices = ({ slug }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const stockID = slug.toLowerCase();



    useEffect(() => {
        const getProfile = async () => {

            fetch(`https://seeking-alpha.p.rapidapi.com/symbols/get-profile?symbols=${stockID}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "API_KEY",
                    "x-rapidapi-host": "seeking-alpha.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then(response => {
                setData(response.data[0]);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });

            
        }
        
        
        let timeoutID = setTimeout(() => {
            getProfile(stockID);
          }, 1001);
          

          // CLEANUP: clear current timer
          return () => {
            clearTimeout(timeoutID);
          };

    }, [isLoading]);


    return (
        <div className={styles.stock_info}>
            {
                data.attributes && (
                    <>
                        <p>Open ${data.attributes.lastDaily.open}  </p>
                        <p>Last ${data.attributes.lastDaily.close}  </p>
                        <p>High ${data.attributes.lastDaily.high}  </p>
                        <p>Low ${data.attributes.lastDaily.low} </p>
                    </>

                )

            }
        </div>
    );
 
                






}

export default Prices;
