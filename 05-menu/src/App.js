import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [meals, setMeals] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCat = (category) => {
    if (category === 'all') {
      setMeals(items);
      return;
    }
    const newCat = items.filter((cat) => cat.category === category);
    setMeals(newCat);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterCat={filterCat} categories={categories} />
        <Menu meals={meals} />
      </section>
    </main>
  );
}

export default App;
