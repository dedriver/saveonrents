import React from 'react';

export default function Left({ inputValue }) {
  return (
    <section className="createRightSection">
    <p className='Constructor'>Constructor</p>
    <div className='line'></div>
    <p>Value from input: {inputValue}</p>
</section>
  );
}
