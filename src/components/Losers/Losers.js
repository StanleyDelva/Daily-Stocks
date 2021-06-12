import React, { useState, useEffect } from 'react';
import Loser from './Loser/Loser.js';


const Losers = ({ losers }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);



    useEffect(() => {
        const getLosers = () => {
            fetch("https://seeking-alpha.p.rapidapi.com/market/get-day-watch", {
            
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "API_KEY",
                "x-rapidapi-host": "seeking-alpha.p.rapidapi.com"
            }
            })
            .then(response => response.json())
            .then(response => {
                setData(response.data.attributes.top_losers);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }


    let timeoutID = setTimeout(() => {
        getLosers();
    }, 6001);

    return () => {
        clearTimeout(timeoutID);
    };

    }, [isLoading]);

    const losersMapped = data.map(stock => {
        return ( 
            <Loser
                key={stock.slug} 
                slug={stock.slug}
                name={stock.name}
            />
        );
    });

    return (
        <>
                <h1>Top Losers</h1>
            {losersMapped}
        </>
    );
}

export default Losers;