import React from 'react';

const Categories = ({ filterCat, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          key={index}
          className='filter-btn'
          onClick={() => filterCat(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
