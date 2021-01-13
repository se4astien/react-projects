import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // console.log(data);
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>

        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
