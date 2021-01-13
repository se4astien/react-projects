import React from 'react';

const Menu = ({ meals }) => {
  // console.log(meals);
  return (
    <div className='section-center'>
      {meals.map((meal) => {
        const { id, title, img, desc, price } = meal;
        return (
          <article key={id} className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
