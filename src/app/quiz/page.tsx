'use client';
import React, { useState } from 'react';
import { Container, Navbar, Section } from '@/components';
import { quiz_1 } from '../../data/dummyQuiz';

interface Question {
  id: number;
  imageUrl: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

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
}: any) => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {/* Answer Options */}
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
    </div>
  );
};

const QuizQuestions = ({
  questions,
  selectedQuestion,
  handleQuestionSelection,
}: any) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {/* Question Containers */}
      {questions.map((question: Question) => (
        <div
          key={question.id}
          className={`w-32 h-12 rounded-md mb-2 cursor-pointer ${
            selectedQuestion === question.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => handleQuestionSelection(question.id)}
        >
          {`Question ${question.id}`}
        </div>
      ))}
    </div>
  );
};

const SingleQuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleQuestionSelection = (questionId: number) => {
    setSelectedQuestion(questionId);
  };

  return (
    <Container className="text-black bg-creamWhite">
      <Navbar />
      <div className="text-center">
        <h1 className="text-[30px] font-[600]">{quiz_1.quiz_title} - QUIZ</h1>
      </div>
      <Section className="flex flex-row gap-[50px] justify-center">
        <QuizImage
          imageUrl={quiz_1.questions[selectedQuestion]?.imageUrl || ''}
        />
        <QuizAnswerOptions
          answers={quiz_1.questions[selectedQuestion]?.answers || []}
          selectedAnswer={selectedAnswer}
          handleAnswerSelection={handleAnswerSelection}
        />

        <div className="w-35 mt-[50px]">
          <QuizQuestions
            questions={quiz_1.questions}
            selectedQuestion={selectedQuestion}
            handleQuestionSelection={handleQuestionSelection}
          />
        </div>
      </Section>
    </Container>
  );
};

export default SingleQuizPage;
