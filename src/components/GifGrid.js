import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({lista}) => {


  const [counter, setcounter] = useState(0);
    useEffect(() => {
      fetchRequestGiphy();
    }, [])

    
    const fetchRequestGiphy = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Hv0iHm35KopBPrli6ZdzwSbwOWUSJTPb&q=${lista}&limit=5&offset=0&rating=g&lang=en`;
        const response = await fetch(url);
        const {data} = await response.json();
        const formatData = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url: img.images.downsized_medium.url
            }
        });
        console.log(formatData);
      } 
  return (
    <>
    <h2>{lista}</h2>
    <h2>{counter}</h2>
    <button onClick={ () => (setcounter(counter+1))}></button>
    <h3>{fetchRequestGiphy.formatData}</h3>

    </>
  )
}

GifGrid.propTypes = {}

export default GifGrid;