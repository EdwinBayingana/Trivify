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
        className="w-[300px] h-[300px] rounded-lg object-cover"
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
          className={`w-64 h-12 rounded-md mb-2 cursor-pointer ${
            selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleAnswerSelection(index)}
        >
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
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleQuestionSelection = (questionId: number) => {
    setSelectedQuestion(questionId);
  };

  return (
    <Container className="text-black">
      <Navbar />
      <Section className="flex">
        <div className="w-65">
          <QuizImage
            imageUrl={quiz_1.questions[selectedQuestion]?.imageUrl || ''}
          />
          <QuizAnswerOptions
            answers={quiz_1.questions[selectedQuestion]?.answers || []}
            selectedAnswer={selectedAnswer}
            handleAnswerSelection={handleAnswerSelection}
          />
        </div>
        <div className="w-35">
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

// 'use client';
// import React, { useState, useEffect } from 'react';
// import {
//   QuizLeftSide,
//   QuizRightSide,
//   Container,
//   Navbar,
//   Section,
// } from '@/components';

// const SingleQuizPage = () => {
//   return (
//     <Container className="text-black">
//       <Navbar />
//       <Section className="flex">
//         <QuizLeftSide />
//         <QuizRightSide />
//       </Section>
//     </Container>
//   );
// };

// export default SingleQuizPage;
