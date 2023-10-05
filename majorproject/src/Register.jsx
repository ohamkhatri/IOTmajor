// Registration.js
import React, { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement user registration logic here

  };

  return (
    <div className='content'>
    <div>
        <h1>NO WATER, NO LIFE !,SAVE WATER ,SAVE LIFE</h1>
    </div>
      
      <div className='box'>
      <h1>Registration</h1>
        <input
          type="text"
          placeholder="Username"
          className='field'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className='field'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn' onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Registration;








/*import React, { useState } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // You can add your registration logic here, like making an API call.
    console.log('Registering with email:', email, 'and password:', password);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;




/*import React from "react";

function Register(){
    return(
        <>
            <h1>Register Here</h1>
        </>
    );

}

export default Register;*/