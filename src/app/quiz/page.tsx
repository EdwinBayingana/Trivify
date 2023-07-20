'use client';
import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Section,
  QuizImage,
  QuizAnswerOptions,
  QuizQuestions,
} from '@/components';
import { quiz_1 } from '../../data/dummyQuiz';

interface Question {
  id: number;
  imageUrl: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

// ... other imports and components ...

const SingleQuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quiz_1.questions.length).fill(null),
  );
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const handleAnswerSelection = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionId] = answerIndex;
      return updatedAnswers;
    });
  };

  const handleQuestionSelection = (questionId: number) => {
    setSelectedQuestion(questionId);
  };

  const nextQuestion = () => {
    const selectedAnswer = selectedAnswers[selectedQuestion as number];
    setResult((prev) => {
      const { correctAnswer } = quiz_1.questions[selectedQuestion as number];
      const isCorrectAnswer =
        selectedAnswer !== null &&
        quiz_1.questions[selectedQuestion as number].answers[selectedAnswer] ===
          correctAnswer;

      return isCorrectAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });

    if (
      selectedQuestion !== null &&
      selectedQuestion < quiz_1.questions.length - 1
    ) {
      setSelectedQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setSelectedQuestion(0);
    setSelectedAnswers(new Array(quiz_1.questions.length).fill(null));
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setShowResult(false);
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
        {!showResult ? (
          <>
            <div className="flex flex-col mt-[70px]">
              <QuizAnswerOptions
                answers={quiz_1.questions[selectedQuestion]?.answers || []}
                selectedAnswer={selectedAnswers[selectedQuestion as number]}
                handleAnswerSelection={(answerIndex) =>
                  handleAnswerSelection(selectedQuestion as number, answerIndex)
                }
                selectedQuestion={selectedQuestion}
                totalQuestions={quiz_1.totalQuestions}
              />
              <div className="flex justify-center">
                {selectedAnswers[selectedQuestion as number] !== null ? (
                  <button
                    onClick={nextQuestion}
                    className="bg-gray-700 w-[100px] text-white h-[45px] rounded-md"
                  >
                    {selectedQuestion === quiz_1.questions.length - 1
                      ? 'Finish 🎯'
                      : 'Next'}
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-400 w-[100px] cursor-not-allowed h-[45px]"
                  >
                    Choose an answer
                  </button>
                )}
              </div>
            </div>
            <div className="w-35 mt-[50px]">
              <QuizQuestions
                questions={quiz_1.questions}
                selectedQuestion={selectedQuestion}
                handleQuestionSelection={handleQuestionSelection}
              />
            </div>
          </>
        ) : (
          <div className="w-[300px] bg-white h-[230px] px-2 py-2 rounded-sm text-black">
            <h3>Results</h3>
            <h3>
              Overall {(result.score / (quiz_1.questions.length * 5)) * 100}%
            </h3>
            <p>
              Total Questions: <span>{quiz_1.questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={restartQuiz}>Restart</button>
          </div>
        )}
      </Section>
    </Container>
  );
};

export default SingleQuizPage;
