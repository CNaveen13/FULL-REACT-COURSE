import React, {useState,useEffect} from "react";
import useFetch from "./usefetch";

const FirstApi= () => {
    const URL="https://jsonplaceholder.typicode.com/users";
 
    const[userData, loading, isError]=useFetch(URL);
    
    if(isError)
    {
        return<h3>something was happend</h3>
    }
    if(loading)
    {
        return<h3>loading....</h3>
    }

    return(
        <div>
            <h1>Users</h1>
            <ul>{userData.map((eachUser) => {
                return  <li key={eachUser.id}>{eachUser.name}</li>
            })}
            </ul>
        </div>
    );
};

export default FirstApi;