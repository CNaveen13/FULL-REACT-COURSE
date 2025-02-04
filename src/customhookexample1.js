import React from "react";
import useCounter from "./usecounter";

const FirstCounter = () => {
     const[count,increment,decrement,reset]=useCounter();

    return (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default FirstCounter;