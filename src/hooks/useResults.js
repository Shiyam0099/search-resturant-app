import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ()=> {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async(term) => {
        try{

            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: term,
                    location: 'San jose'
                }
            });
            setResults(response.data.businesses);

        }catch(err){

            setErrorMessage('Something went wrong!');
            console.log(err);

        }
        
    };

    useEffect(()=>{
        searchApi('italian');
    },[]);

    return [searchApi, results, errorMessage];
};