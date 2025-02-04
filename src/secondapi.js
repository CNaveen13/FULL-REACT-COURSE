import React, {useState,useEffect} from "react";
import useFetch from "./usefetch";

const SecondApi= () => {
    const URL="https://jsonplaceholder.typicode.com/users";

     const [postData,loading,isError]=useFetch(URL);

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
            <h1>Posts</h1>
            <ul>{postData.map((eachUser) => {
                return  <li key={eachUser.id}>{eachUser.email}</li>
            })}
            </ul>
        </div>
    );
};

export default SecondApi;