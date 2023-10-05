// Dashboard.js
import React from 'react';
import './App.css';

function Dashboard() {
  return (
    <>
    <div className='content'>
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome to the dashboard!</h2>
    </div>
    <div className='box'>
        <label className='content'>
            Select Location:--   
            <input type="search" className='field' placeholder='Search location' />
        </label>
        <button className='btn'>Search</button>
    </div>
    </div>
    </>
  );
}

export default Dashboard;










/*import React from "react";
import ReactDOM from 'react-dom/client';

function Dashboard(){
    return(
<h1>
    Welcome
</h1>
    );
}

export default Dashboard;*/