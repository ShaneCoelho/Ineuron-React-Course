import React from 'react';
import './style.css';
import Button from './Button';

const App=()=>{
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Hello World!!!</h1>
            <Button title='Hello' />
            <Button />
        </div>
    )
}

export default App;