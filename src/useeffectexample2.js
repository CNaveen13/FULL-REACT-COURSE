/* import React, {useState,useEffect} from "react";
const URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=p";

const Final = () =>{
    const[drinksdata,setdrinksdata]=useState([]);
    const[searchterm,setsearchterm]=useState('');

    const fetchdrinks=async (apiurl) =>{
        try{
        const response=await fetch(apiurl);
        const {drinks}=await response.json();
        setdrinksdata(drinks || []);
        }
        catch(error)
        {
            console.error("error fetching data",error);
            setdrinksdata([]);
        }
    };

    useEffect(()=>{
        const correctURL=`${URL}${searchterm}`;
     fetchdrinks(correctURL);
    },[searchterm]);


   return (
      <div>
        <form>
            <input type="text"
            name="search"
            id="search"
            palceholder="search for cocktail..."
            value={searchterm}
            onChange={(e)=> setsearchterm(e.target.value)}
            />
            </form>
            <hr/>
            <>
            {drinksdata.length > 0 ? (
            <ul className="cocktail-data">
                {drinksdata.map((eachObject)=> {
                   const {idDrink,strDrink,strDrinkThumb}=eachObject;
                   return (
                   <li key={idDrink}> 
                     <div>
                         <img src={strDrinkThumb} alt={strDrink}></img>
                     </div>
                     <div className="text">
                        <h3>{strDrink}</h3>
                     </div>
                   </li>
                   );
                })}
                </ul>
                ) : (
                    <p> No cocktail found. Try searching for another drink.</p>
                )}
            </>
        
         </div>
   );
};

export default Final; */