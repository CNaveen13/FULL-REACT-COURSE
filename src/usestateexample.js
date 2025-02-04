/*  import React, {useState} from "react";
import "./App.css";

const Index = () =>{
    //example 1
//     const[showdata,setshowdata]=useState(false);

//     const handleChange = () =>{
//         setshowdata(!showdata);
//     }
//    return(
//         <div>
//           <button onClick={handleChange}>{showdata ? "Hide" : "show"}</button>
//           {showdata &&(
//           <div className="content">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
//           </div>
//           )}
//         </div>
//    );
      
const[firstname, setfirstname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");

// const changeFirstname = (e) =>{
//       setfirstname(e.target.value);
// };

//     function changeEmail(e) {
//         setemail(e.target.value);
//     }

// const changePassword = (e) =>{
//     setpassword(e.target.value);
// };

const handleInputChange = (e,name) =>{
     if(name==="firstname"){
          setfirstname(e.target.value);
     }
     else if(name==="email"){
        setemail(e.target.value);
     }
     else if(name==="password"){
        setpassword(e.target.value);
     }
};

const handleSubmit = (e) =>{
    e.preventDefault();
     let userObj={
       firstname:firstname,
       email:email,
       password:password,
     };
     console.log(userObj);
};

    return(
        <div>
           <form onSubmit={handleSubmit}>
            <div className="form-content">
            <input type="text" name="firstname"  value={firstname} id="firstname" placeholder="enter your name" onChange={ (e)=>handleInputChange(e,"firstname")}/>
            </div>
            <div className="form-content">
            <input type="text" name="email" value={email} id="email" placeholder="enter your email" onChange={(e)=>handleInputChange(e,"email")}/>
            </div>
            <div className="form-content">
            <input type="text" name="password" value={password} id="password" placeholder="enter your password" onChange={(e)=>handleInputChange(e,"password")}/>
            </div>
            <div className="form-button">
                <button type="submit"> submit </button>
            </div>
           </form>
        </div>
    );

};
export default Index;  */