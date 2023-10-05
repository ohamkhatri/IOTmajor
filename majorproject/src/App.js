import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Registration from './Register';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Registration/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
//<Route path='/' element={<Home/>}/>


































/*
import React from 'react';
import LoginForm from './Login';
import RegistrationForm from './Register';

function App() {
  return (
    <div>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;






/*import React from "react";
import ReactDOM from 'react-dom/client';
import Log from "./Login";
import Register from "./Register";

function MYapp(props){
  const flag=props.flag;
  if(flag==0){
    return <Log />;
    console.log(flag);
  }
  else if(flag==1){
    return <Register/>;
  }
  else{
    return <MYapp/>;
  }
}
export default MYapp;*/