 import React, {useState,useEffect,useRef} from "react";

const Final = () =>{
    const[firstname,setfirstname]=useState("");
    const rendercount=useRef(1); // this useRef is used to count the component how many times rendered without causing a re-render 
    useEffect(()=>{
         rendercount.current=rendercount.current+1;
    });
    return(
        <>
         <input 
         type="text"
         name="firstname"
         id="firstname"
         onChange={(e)=>{
            setfirstname(e.target.value);
         } }
         />
         <h5>typing; {firstname}</h5>
         <h5>component rendered {rendercount.current}</h5>
        </>
    );
};
export default Final; 