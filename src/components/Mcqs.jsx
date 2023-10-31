import React, { useState } from 'react';


function Hello() {
  const questionData = [
    {
      question: "CSS stands for",
      option: ["Cascading style sheet", "Create styling sheet", "call style sheet", "cast style sheet"],
      answer: "Cascading style sheet",
    },
    {
      question: "Html stands",
      option: ["Hypertext Makeup language", "Hyperlink markup language", "Hypertext markup language", "Hellotext markup language"],
      answer: "Hypertext markup language",
    },
    {
      question: "Pakistan came into being in",
      option: ["1940", "1947", "1948", "1965"],
      answer: "1947",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    if (selectedAnswer === questionData[currentQuestion].answer) {
      setCurrentScore(currentScore + 1);
    }

    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      // If it's the last question, update quizCompleted when clicking "Next"
      setQuizCompleted(true);
    }
  };

  return (
    <div className='d-flex align-items-center flex-column mt-5'>
         <p className='fs-1 fw-bolder'>Quiz App</p>
         <div>
         <p className='fs-3 px-4 py-3 border border-2 border-grey rounded-pill question bg-primary'>{questionData[currentQuestion].question}</p>
         </div>
    
      <div className='options' id="optioncheck">
        {questionData[currentQuestion].option.map((value, index) => {
          return (
            <div key={index}>
              <label className='border border-2 border-grey px-3 py-2 my-2 rounded-pill bg-warning'>
                <input
                  type='radio'
                  value={value}
                  checked={selectedAnswer === value}
                  onChange={() => setSelectedAnswer(value)}
                />{' '}
                {value}
              </label>
            </div>
          );
        })}
      </div>

      <div className=''>
        <button onClick={handleNext} className='btn bg-success text-white rounded-pill px-3 py-1 mt-3 '>Next</button>
      </div>

      {quizCompleted && <div className='mt-3 px-3 py-4 bg-danger text-white'><h1>Your Score is {currentScore}</h1></div>}
    </div>
  );
}

export default Hello;