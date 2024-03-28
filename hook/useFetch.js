import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query) =>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key':'06695fccbemsh496a32f02a30fcdp1480bdjsn41a0e247ea10',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async ()=>{
        setIsLoading(true);
        try{
            const response = await axios.request
            (options);
            setData(response.data.data);
            setIsLoading(false);
        }catch(error){
             setError(error);
             console.log(error)
        }finally{
             setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[])

      const refersh = () =>{
        setIsLoading(true);
        fetchData(); 
      }
      return {data,isLoading,error,refersh};
}

export default useFetch;