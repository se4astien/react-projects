import React, { useState } from 'react';
import Tours from './Tours';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [show, setShow] = useState(false);

  return (
    <article key={id} className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>

        <p>
          {show ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShow(!show)}>
            {show ? 'read less' : 'read more'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
