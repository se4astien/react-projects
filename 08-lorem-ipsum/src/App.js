import React, { useState } from 'react';
import data from './data';
function App() {
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' name='amount' id='amount' value='2' />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <p></p>
      </article>
    </section>
  );
}

export default App;
