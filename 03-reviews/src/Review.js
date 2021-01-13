import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  // console.log(people.length);

  const checkNumber = (nbr) => {
    if (nbr < 0) {
      return people.length - 1;
    }
    if (nbr > people.length - 1) {
      return 0;
    }
    return nbr;
  };

  const prevBtn = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextBtn = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomBtn = () => {
    let randomNbr = Math.floor(Math.random() * people.length);
    if (randomNbr === index) {
      randomNbr = index + 1;
    }
    setIndex(checkNumber(randomNbr));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomBtn}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
