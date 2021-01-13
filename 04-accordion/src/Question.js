import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const { title, info } = question;
  const [show, setShow] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShow(!show)}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
