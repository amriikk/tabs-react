import React, { useState, useEffect } from 'react';
// import { FaAngleDoubleRight } from 'react-icons/fa';
import exp from './exp.json';
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
  }, [])
  
  if(loading){
    return <section className='section-loading'> 
      <h1>loading...</h1>
    </section>
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <div className="App">
      <section className='section'>
        <div className= 'title'>
          <h2>Experience</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
