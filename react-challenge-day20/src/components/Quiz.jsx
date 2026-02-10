import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const questions = [
    {
      questionText: 'which year was React launched?',
      answerOptions: [
        { answerText: '2012', isCorrect: false },
        { answerText: '2013', isCorrect: true },
        { answerText: '2014', isCorrect: false },
        { answerText: '2015', isCorrect: false },
      ],
    },
    {
      questionText: 'Which company develops React?',
      answerOptions: [
        { answerText: 'Google', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Meta (Facebook)', isCorrect: true },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'Which hook is used for managing "side effects"?',
      answerOptions: [
        { answerText: 'useState', isCorrect: false },
        { answerText: 'useReducer', isCorrect: false },
        { answerText: 'useEffect', isCorrect: true },
        { answerText: 'useRef', isCorrect: false },
      ],
    },
    {
      questionText: 'What is JSX?',
      answerOptions: [
        { answerText: 'A JavaScript library', isCorrect: false },
        { answerText: 'A CSS framework', isCorrect: false },
        { answerText: 'JavaScript XML', isCorrect: true },
        { answerText: 'A type of database', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className='quiz-app'>
      {showScore ? (
        <div className='score-section'>
          <h2>Game Over! 🎉</h2>
          <div className='score-text'>
            Score: {score} / {questions.length}
          </div>
          <button onClick={restartQuiz} className="restart-btn">Restart Quiz 🔄</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          

          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index}
                className="answer-btn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;