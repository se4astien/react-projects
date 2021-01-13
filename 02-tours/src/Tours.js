import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  // console.log(tours);

  return (
    <div>
      {tours.map((tour, index) => {
        return <Tour key={index} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
