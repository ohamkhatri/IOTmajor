import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Log from './Login';
import Register from './Register';
//import reportWebVitals from './reportWebVitals';
/*let task=1;
function Task1(){
  const shoot = () => {
    task=0;
    window.location.reload(true);
  }
  return(
<button onClick={shoot}>Home</button>

  );
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);


