import React, { useState, useEffect } from 'react';
// import { FaAngleDoubleRight } from 'react-icons/fa';
import exp from './data.js';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(exp);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect( () => {
    fetchJobs();
  }, []);
  
  if(loading){
    return <section className='section-loading'> 
      <h1>loading...</h1>
    </section>
  }

  return (
    <div className="App">
      <h2>Experience Tabs</h2>
    </div>
  );
}

export default App;
