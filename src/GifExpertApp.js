import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({saludo="Soy el undefined"}) => {
  const [lista, setLista] = useState(['Flash']);
  return (
    <>
    <h1>GifExpertApp</h1>
    <hr/>
    <AddCategory setLista={setLista}/>
    
    <ol>
      {
        lista.map(values =>{
         return <GifGrid key={values} lista={values}/>
        })
      }
    </ol>

    </>
  )
}

GifExpertApp.propTypes = {
    saludo:PropTypes.string.isRequired
}

export default GifExpertApp;
