import React, {useState, useEffect} from 'react';
import Box from './Box';
import {fetchData} from '../utils/utils';

function BoxContainer() {
    const API = 'https://random.dog/woof.json';
    const SIZE = 8;
    let [data, setData] = useState([]);

    useEffect(() => {
        fetchData(API, SIZE).then(res => {
            setData(res);
        });
      }, []);

    return (
        <div className = 'box-container'>
            {data.map(data => {
                return <Box key={data.url} url={data.url} type={data.type}/>
            })}
        </div>
    )
}

export default BoxContainer;
