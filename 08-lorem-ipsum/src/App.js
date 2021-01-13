import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  // console.log(data.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count); => string
    let amount = +count;
    // console.log(typeof amount); => number

    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
