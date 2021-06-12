import React, { useState, useEffect } from 'react';
import Active from './Active/Active.js';


const Actives = ({ actives }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);



    useEffect(() => {
        const getActives = async () => {
            fetch("https://seeking-alpha.p.rapidapi.com/market/get-day-watch", {
            
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "API_KEY",
                "x-rapidapi-host": "seeking-alpha.p.rapidapi.com"
            }
            })
            .then(response => response.json())
            .then(response => {
                setData(response.data.attributes.most_active);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
        }

        let timeoutID = setTimeout(() => {
            getActives();
        }, 11001);

        return () => {
            clearTimeout(timeoutID);
          };
        

    }, [isLoading]);

    const activesMapped = data.map(stock => {
        return (
            <Active
                key={stock.slug} 
                slug={stock.slug}
                name={stock.name}
            />
        );
    });


    return (
        <>
              <h1>Most Active</h1> 
            {activesMapped}
    
        </>
    );
}

export default Actives;