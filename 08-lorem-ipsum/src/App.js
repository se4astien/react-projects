import React, { useState } from 'react';
import data from './data';

function App() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(typeof amount);
    let count = parseInt(amount);
    console.log(typeof count);

    if (amount <= 0) {
      count = 1;
    }
    if (amount > data.length) {
      count = data.length;
    }

    setText(data.slice(0, count));
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
