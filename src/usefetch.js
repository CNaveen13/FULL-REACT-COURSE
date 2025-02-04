// custom hook example
import React, {useState,useEffect} from "react";

function useFetch(URL) {
        const [data,setData]=useState([]);
        const [loading,setLoading]=useState(false);
        const [isError,setError]=useState(false);
    
        const makeAPICall = async () => {
            setLoading(true);
            setError(false);
           try{
            const response=await fetch(URL);
            const comingdata=await response.json();
            setData(comingdata);
            setLoading(false);
           }
           catch(error)
           {
               setError(true);
               setLoading(false);
               
           }
            
        };
    
        useEffect(() => {
             makeAPICall(); 
        },[]);

        return [data,loading,isError];
}

export default useFetch;