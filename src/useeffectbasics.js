import React, {useEffect,useState} from "react";

const Final = () =>{

    const[count,setcount]=useState(0);

    useEffect(()=> {
       console.log("Hello iam from useeffect");
    },[]);
    return (
       <div>
        <h1> Learn useeffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1);
        }}>
            +
        </button>
       </div>
    );
};
export default Final;