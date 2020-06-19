import React, { useState, useEffect } from 'react';
import Box from './Box';
import { fetchData } from '../utils/utils';

function BoxContainer() {
  // constants
  const API = 'https://random.dog/woof.json';
  const SIZE = 8;

  // init state
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  // function to fetch data
  const getData = () => {
    setIsLoading(true);
    fetchData(API, SIZE).then(res => {
      setIsLoading(false);
      setData(res);
    });
  }

  // handling side effect, only execute once
  useEffect(() => {
    getData();
  }, []);

  // render boxes
  return (
    <>
      <div className='box-container'>
        {data.map(data => {
          return <Box key={data.url} url={data.url} type={data.type} />
        })}
      </div>

      <button 
        className={isLoading?'myDisabledButton':'myButton'} 
        onClick={getData} 
        disabled={isLoading}
      > 
        {isLoading ? 'Loading' : 'Get Random Dogs' }
      </button>
    </>
  )
}

export default BoxContainer;
