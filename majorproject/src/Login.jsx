// Login.js
import React, { useState } from 'react';
//import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
// import Dashboard from './Dashboard';

const Login=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();
  

  // const handleLogin = () => {
    //send a a successful login (replace with actual authentication logic)
    // navigate('./Dashboard');

    /*if (username === 'user' && password === 'password') {
      // Redirect to the dashboard upon successful login
      
    } else {
      // Handle login failure 
      alert('Login failed. Please check your credentials.');
    }*/
  // };

  return (
    <>
    <div className='content'>
    <div >
      <h1>WATER PRESERVATION AND ADMINISTRATION SYSTEM</h1>
      </div>

      <div className='box'>
      <label className='content'></label>
      
        <input
          type="number"
          placeholder="UserId"
          value={username}
          className='field'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className='field'
          pattern='.{8,}' title='8 or more characters'
          placeholder="Password"
          value={password}
          
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button  className='btn' onClick={handleLogin}>Login</button> */}
        <NavLink to='/Dashboard' className="btn" >Login</NavLink> 
      </div>
      <div className='Content'>
        <p>Don't have an account? <a className='btn' href="/register">Register here</a></p>
      </div>
    </div>
    </>
  );
}

export default Login;








/*import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here, like making an API call.
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;



/*import React from "react";
import Dashboard from "./Dashboard";
import ReactDOM from 'react-dom/client';

function Dashboard1(){
    return(
        <Dashboard />
    );
}


function Log(){
    return(
        <form>
            <label>Enter your UserId:
                <input type="number" min={5} max={10} />
            </label>
            <label>Enter your Password:
              <input type="password" pattern=".{8,}" />
            </label>

            <button onClick={Dashboard1}>Login</button>
        </form>

    );
}
export default Log;*/