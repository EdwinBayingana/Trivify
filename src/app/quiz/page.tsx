'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, index: number) => {
    setChecked(true);
    setSelectedAnswerIndex(index);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          },
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="mx-8">
      <h1 className="mt-[20px] text-[25px]">Quiz Page</h1>
      <div>
        <h3>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h3>
      </div>
      <div>
        {!showResult ? (
          <div className="mt-[40px] w-[500px] h-full px-2 py-2 bg-[#e4e4e4] rounded-md">
            <h3 className="font-[500] text-black text-[25px]">
              {questions[activeQuestion].question}
            </h3>
            {answers.map((answer, index) => (
              <ul className="text-black mt-3" key={index}>
                <li
                  key={index}
                  onClick={() => onAnswerSelected(answer, index)}
                  className={`border my-2 ${
                    selectedAnswerIndex === index
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  } py-2 px-2 cursor-pointer h-auto border-gray-300`}
                >
                  {answer}
                </li>
              </ul>
            ))}
            <div className="flex justify-center">
              {checked ? (
                <button
                  onClick={nextQuestion}
                  className="bg-gray-700 w-[50%] h-[45px] rounded-md"
                >
                  {activeQuestion === question.length - 1
                    ? 'Finish 🎯'
                    : 'Next'}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="bg-gray-400 w-[50%] cursor-not-allowed h-[45px]"
                >
                  Choose an answer
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-[300px] h-[30px] bg-white"></div>
        )}
      </div>
    </div>
  );
};

export default page;
