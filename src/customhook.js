// These hooks we can generate 
//custom hook written in usePageTitle.js from there we are extracting it
import React, {useState,useEffect} from "react";
import usePageTitle from "./usePageTitle";

const PageTitleOne = () => {
    const [count,setCount]=useState(0);
     
    usePageTitle(count); // this is the custom hook we are calling and passing the prop as count this custom present in the usepagetitle.js no need to write the code again in multiple files 

    return(
        <div>
           <button onClick={() => setCount(count+1)}>Count - {count}</button>
        </div>
    );
};

export default PageTitleOne;