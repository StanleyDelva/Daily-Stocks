import React, { useState, useEffect } from 'react';
import Gainer from './Gainer/Gainer.js';


const Gainers = ({ gainers }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);


    
    useEffect(() => {
        const getGainers = async () => {
    
            fetch("https://seeking-alpha.p.rapidapi.com/market/get-day-watch", {
            
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "API_KEY",
                "x-rapidapi-host": "seeking-alpha.p.rapidapi.com"
            }
            })
            .then(response => response.json())
            .then(response => {
                setData(response.data.attributes.top_gainers);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
        }

        let timeoutID = setTimeout(() => {
            getGainers();
        }, 0);


        return () => {
            clearTimeout(timeoutID);
          };
        
    }, [isLoading]);


    const gainersMapped = data.map(stock => {
        return (
            <Gainer
                key={stock.slug} 
                slug={stock.slug}
                name={stock.name}
            />
        );
    });

    return (
        <>
              <h1>Top Gainers</h1> 
            {gainersMapped}
        </>
    );

}

export default Gainers;