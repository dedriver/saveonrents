import React, { useState } from 'react';

export default function Right({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); // Викликати зворотню функцію onInputChange з новим значенням
  };

  return (
    <section className="createRightSection">
    <p className='Constructor'>Constructor</p>
    <div className='line'></div>
    <input type="text" value={inputValue} onChange={handleInputChange} />
</section>
  );
}
