/* import React, {useState,useEffect,useRef} from "react";

const Final = () =>{
    const[firstname,setfirstname]=useState("");
    const inputDom=useRef("");

    useEffect(()=>{
         console.log(inputDom);
    });

    const focus = () =>{
        inputDom.current.focus(); // it will focus on the dom that it is refering in the dom 
    }
    return(
        <>
         <input 
         ref={inputDom} // this is the reference that focus function will focus on using the useRef
         type="text"
         name="firstname"
         id="firstname"
         onChange={(e)=>{
            setfirstname(e.target.value);
         } }
         />
         <h5>typing; {firstname}</h5>
         <button 
         onClick={focus}>
            focus
         </button>
        </>
    );
};
export default Final; */