/* import React, {useState} from "react";
import "./App.css";

const Index = () =>{
    const initializeObject={
        firstName:"emma",
        secondName:"watson",
        age:27,

    };

    const[Data,setData]=useState(initializeObject);

    const changeFirstName = () =>{
        setData({
            ...Data,
            firstName:"Naveen",
        });
    };

    const changeSecondName = () =>{
        setData({
            ...Data,
           secondName:"Chatta",
        });
    };
    
    return(
        <div>
            <h1> My firstname is {Data.firstName}</h1>
            <button onClick={changeFirstName}> change firstname</button>
            <h1> My lastname is {Data.secondName}</h1>
            <button onClick={changeSecondName}> change secondname</button>
            <h1>age {Data.age}</h1>
        </div>
    );
};
export default Index;  */