'use client';
import React, { useState } from 'react';
import { Container, Navbar, Section } from '@/components';
import { quiz_1 } from '../../data/dummyQuiz';

const QuizLeftSide = () => {
  const QuizImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
      <div className="flex justify-center items-center h-[400px]">
        {/* Centered Image */}
        <img
          src={imageUrl}
          alt="Quiz Image"
          className="w-[250px] h-[250px] rounded-[30px] object-cover"
        />
      </div>
    );
  };

  const QuizAnswerOptions = ({
    answers,
    selectedAnswer,
    handleAnswerSelection,
    selectedQuestion,
    totalQuestions,
  }: any) => {
    return (
      <div className="flex flex-col justify-center items-center mt-4">
        {/* Answer Options here 👇🏽 */}
        {answers.map((answer: string, index: number) => (
          <div
            key={index}
            className={`flex gap-3 w-64 h-11 border border-[#CDCDCD] rounded-md py-[10px] px-1 mb-2 cursor-pointer text-[14px] ${
              selectedAnswer === index
                ? 'bg-[#EAE8FF] text-black border-[#655DBB]'
                : 'bg-white'
            }`}
            onClick={() => handleAnswerSelection(index)}
          >
            <div
              className={` ${
                selectedAnswer === index ? 'bg-[#655DBB] ' : 'bg-[#F5F5F5]'
              }  ml-1 mt-[2px] border border-[#CDCDCD] h-4 w-4 rounded-full`}
            ></div>
            {answer}
          </div>
        ))}
        <div className="text-center mb-4">
          {selectedQuestion} / {totalQuestions}
        </div>
      </div>
    );
  };
};

export default QuizLeftSide;
