import { useState, useEffect } from "react";
import axios from "axios";

import { TopAnime } from '../interfaces/TopAnime.interface';

const useFetch = ()=>{
    const URL = 'https://api.jikan.moe/v4/top/anime';

    const [data, setData] = useState<TopAnime>(
        { 
            pagination: {
                last_visible_page: 0,
                has_next_page: false,
                items: {
                    count: 0,
                    total: 0,
                    per_page:0,
                }
            },
            data: [],
        });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const fetchData = async ()=>{
        setIsLoading(true);

        try {
            const { data } = await axios.get(URL);
            setData(data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return {
        data,
        isLoading,
        error,
        refetch,
    }
}

export default useFetch;