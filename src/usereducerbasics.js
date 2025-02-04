/*  import React, {useReducer,useState} from "react";
import { isDOMComponent } from "react-dom/test-utils";


const reducer = (state,action) => {
    if(action.type==="DELETE_PERSON"){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id!==action.payload;
        });
    
    return {
        ...state,
        data:newPersons,
        
    };
}
};

const Final= () =>{
    const intialState={
        data :[
           {id:"122121",firstname:"chatta",email:"naveenchatta1@gmail.com"},
           {id:"12312414",firstname:"emma",email:"emma@gmail.com"},
            
        ],
        length:2,
    };

    const[state, dispatch]=useReducer(reducer,intialState);
     
    const handledelete = (id) =>{
          dispatch({
            type:"DELETE_PERSON",
            payload:id,
          });
 
    };

        
   return (
      <div>
        <h2>Current users length {state.length}</h2>
        {state.data.map((eachObject) =>{
          const {id,firstname,email}=eachObject;
          return(
              <div key={id}>
              <h2>{firstname}</h2>
              <p>email</p>
              <button onClick={()=>handledelete(id)}>delete</button>
              </div>
          );
        })}
      </div>
   );
};

export default Final;  */