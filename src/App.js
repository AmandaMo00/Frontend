
import './App.css';
// import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Home2 from './Home2';

function App() {

  const title = '6666666'
  return (
    <div className="App">

      <Navbar></Navbar>
      <div className='content'>

      <Home2/>
        {/* <h1>App Component</h1> 
        <h1>{title}</h1> 
        <h1>App {title}Component</h1>  */}
      </div>  
      


    </div>
  );
}

export default App;
