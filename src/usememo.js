import React, {useState,useMemo,useEffect} from "react";


// useMemo used to increase the performance 
// useMemo uses the call back function
const Final = () => {
    const[number,setnumber]=useState(0);
    const[dark,setDark]=useState(false);

    const doublenumber=useMemo(() => {  // it will call the slowfunction when the number changes only but it will not call when the theme changed because we specified the dependency as 'number'
        return slowfunction(number);
    },[number]);

    const themechange =useMemo(()=>{
        return{
        backgroundColor:dark ? "black" : "white",
        color:dark ? "white":"black",
        }
    },[dark]); // dependency is the dark when the dark changed then it will re-render the component

    useEffect(() => {
         console.log("theme changed");
    }, [themechange]);  // this useeffect will re-render the all componens when even one component changed to avoid this we used useMemo in themechange

   

   return(
        <>
        <div>
         <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e)=>setnumber(Number(e.target.value))}
          />
        </div>
        <br/>
        <div>

            <button onClick={()=>setDark(!dark)}>
                change theme
            </button>
        </div>
        <h2 style={themechange}>the number:{doublenumber}</h2>
        </>
   );
};
const slowfunction=(number) =>{
    for(let index=0;index<100000000;index++) 
    {
       return number*2;
    }
};

export default Final;