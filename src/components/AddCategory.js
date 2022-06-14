import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setLista}) => {
    const [inputValue, setInputValue] = useState('');
    const handlerForm = (e) =>{
        e.preventDefault();
        setLista(values=>[inputValue,...values]);
    }
    const handlerInputValue = (e) =>{
        setInputValue(e.target.value);
        console.log(inputValue);
    }
  return (
    <>
        <form onSubmit={handlerForm}>
            <input value={inputValue} onChange={handlerInputValue}/>
        </form>
    </>
  )
}

AddCategory.propTypes = {}

export default AddCategory;