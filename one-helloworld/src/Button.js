import React from 'react';
import './style.css';

const Button=({title='Submit'})=>{
    return(
        <div>
        <button className='button'>{title}</button>
        </div>
    )
}

export default Button;