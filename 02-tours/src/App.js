import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setTours(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <main>
        <section>
          <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
          </div>
          {tours.length === 0 ? (
            <div className='title'>
              <h2>no tour left</h2>
              <button className='btn' onClick={fetchTours}>
                refresh
              </button>
            </div>
          ) : (
            <Tours tours={tours} removeTour={removeTour} />
          )}
        </section>
      </main>
    );
  }
}

export default App;
