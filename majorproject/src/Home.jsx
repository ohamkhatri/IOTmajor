import React ,  {useState} from "react";
import { useNavigate } from 'react-router-dom';
//import Login from "./Login";
//import Registration from "./Register";


function Home(){
    /*const navigate = useNavigate();
    const redirectt = (flag) =>{
        if(flag==0){
            navigate("./Login");
        }
        else{
            navigate("./Registration");
        }
        

    }*/
    return(
        <>
        <div className="content">
            <h1>SMART WATER ADMINISTRATION AND PRESERVATION SYSTEM</h1>
            <div className='box'>
        <p className="content">Don't have an account?
        <br></br><br></br> <a className="btn" href="/register">Register here</a></p>
        <p className="content">Already have an account? <br/><br/><a className="btn" href="/Login">Login here</a></p>
      </div>
        </div>
        </>
    )
}

export default Home;

//<button onClick={redirectt(0)}>LOGIN</button>
      //      <button onClick={redirectt(1)}>REGISTER</button



/*import  ReactDOM from "react";

function Home(){
 return(
<>
<h1>Welcome ! Water administration and preservation system </h1>

</>
 );
}

export default Home;*/
