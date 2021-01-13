import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;

  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }

  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, people]);

  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };

  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > people.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        let newIndex = index + 1;
        if (newIndex > people.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          // if position is current
          if (personIndex === index) {
            position = 'activeSlide';
          }
          // if position is last
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        {/* <button className='prev' onClick={() => setIndex(index - 1)}> */}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        {/* <button className='next' onClick={() => setIndex(index + 1)}> */}
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
