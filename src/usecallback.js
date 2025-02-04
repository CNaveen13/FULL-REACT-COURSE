import React, {useState,useCallback} from 'react';
import Button from "./button";
import Title from "./title";
import Count from "./count";


const ParentComp = () => {  // whenever this parent component renders then the whole children parents also render (incrementAge,incrementSalary) it will drecrease the performance so to avoid this we will use the useCallback memo
    const[age,setAge]=useState(0);
    const[salary,setSalary]=useState(7000);

    
    const incrementAge = useCallback(() => {  // here we used the useCallback memo to stop the recreate this function when the parent component re-renders and this function only renders when the age state changed that is mentioned in the dependency
        setAge(age+1);
    },[age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary+1000);
    },[salary]);


    return (
        <>
        <Title/>
        <Count text ={"age"} number={age}/>
        <Button clickHandler={incrementAge}>increment age</Button>
        <Count text={"salary"} number={salary}/>
        <Button clickHandler={incrementSalary}>increment salary</Button>
        </>
    );
};

export default ParentComp;