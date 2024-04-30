import './Create.css'
import Left from './Left';
import Right from './Right';
import React, { useState } from 'react';

export default function Creates(cre){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
      setInputValue(value);
    };
  
    return (<section className="sectionCreate">
        
            <div className='CreateBLOX'> 
                <Right onInputChange={handleInputChange}></Right>
                <Left  inputValue={inputValue}></Left>
            </div>
    </section>);
}