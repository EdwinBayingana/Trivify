'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  Section,
  QuizImage,
  QuizAnswerOptions,
  ResultCard,
  Button,
  FinishQuizPageSvg,
} from '@/components';
import { Triangle } from 'react-loader-spinner';
import { quiz_1 } from '../../data/dummyQuiz';
import Link from 'next/link';

interface Question {
  id: number;
  imageUrl: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const SingleQuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quiz_1.questions.length).fill(null),
  );
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(0);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBrowseLoading, setIsBrowseLoading] = useState(false);
  const [isLeaderboardLoading, setIsLeaderboardLoading] = useState(false);
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

  const handleBrowseRedirect = () => {
    setIsBrowseLoading(true);

    setTimeout(() => {
      setIsBrowseLoading(false);
    }, 10000);
  };
  const handleLeaderboardRedirect = () => {
    setIsLeaderboardLoading(true);

    setTimeout(() => {
      setIsLeaderboardLoading(false);
    }, 10000);
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
            score: prev.score + 100,
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <Container className="text-black bg-creamWhite">
      <Navbar />
      <div className="text-center">
        <h1 className="text-[30px] font-[600]">{quiz_1.quiz_title} - QUIZ</h1>
      </div>
      <Section
        className={`flex flex-row gap-[50px] ${
          !showResult ? 'justify-center' : 'ml-[250px] mt-[100px]'
        }`}
      >
        {!showResult ? (
          <>
            <QuizImage
              imageUrl={quiz_1.questions[selectedQuestion]?.imageUrl || ''}
            />
            {/* 👇🏽 Done to hide the questions component*/}
            {/* <div className="flex flex-col mt-[70px]">  */}{' '}
            <div className="flex flex-row mt-[20px]">
              <QuizAnswerOptions
                answers={quiz_1.questions[selectedQuestion]?.answers || []}
                selectedAnswer={selectedAnswers[selectedQuestion as number]}
                handleAnswerSelection={(answerIndex) =>
                  handleAnswerSelection(selectedQuestion as number, answerIndex)
                }
                selectedQuestion={selectedQuestion}
                totalQuestions={quiz_1.totalQuestions}
              />
              {/* <div className="flex justify-center"> */}
              <div className="flex justify-center mt-[150px] ml-[50px]">
                {selectedAnswers[selectedQuestion as number] !== null ? (
                  <button
                    onClick={nextQuestion}
                    className="bg-gray-700 w-[170px] text-white h-[45px] rounded-md"
                  >
                    {selectedQuestion === quiz_1.questions.length - 1
                      ? 'Finish 🎯'
                      : 'Next'}
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-400 w-[170px] rounded-lg cursor-not-allowed h-[45px]"
                  >
                    Choose an answer
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <Section className="flex flex-row w-[300px] h-[330px] px-4 py-4 rounded-md text-black shadow-xl">
            <Section className="">
              <Section className="w-[265px]">
                <h3 className="text-2xl font-semibold mb-2">Results</h3>
                <div className="border-b border-gray-300 pb-2 mb-4">
                  <h3 className="text-lg font-semibold">
                    Overall Score:{' '}
                    {(result.score / (quiz_1.questions.length * 100)) * 100}%
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <ResultCard
                    label="Total Questions"
                    value={quiz_1.questions.length}
                  />
                  <ResultCard label="Total Score" value={result.score} />
                  <ResultCard
                    label="Correct Answers"
                    value={result.correctAnswers}
                  />
                  <ResultCard
                    label="Wrong Answers"
                    value={result.wrongAnswers}
                  />
                </div>
                <button
                  onClick={restartQuiz}
                  className="align-center mt-4 ml-[90px] py-2 px-4 bg-primaryPurple hover:bg-[#3f3a7b] text-white rounded-md shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Restart
                </button>
              </Section>
              <Section className="flex flex-col gap-[10px]">
                <Link
                  href="/browse-quizzes"
                  onClick={handleBrowseRedirect}
                  className="cursor-pointer"
                >
                  <Button
                    className="text-white mt-[50px] w-[200px] py-3 bg-primaryPurple text-[13px] rounded-lg justify-center flex text-center"
                    disabled={isBrowseLoading ? true : false}
                  >
                    {isBrowseLoading ? (
                      <Triangle
                        height="20px"
                        width="20px"
                        color="#ffffff"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}
                      />
                    ) : (
                      'Browse more Quizzes'
                    )}
                  </Button>
                </Link>
                <Link
                  href="/leaderboard"
                  onClick={handleLeaderboardRedirect}
                  className="cursor-pointer"
                >
                  <Button className="w-[200px] py-3 bg-white text-primaryPurple border border-primaryPurple text-[13px] rounded-lg text-center">
                    {isLeaderboardLoading ? (
                      <Triangle
                        height="20px"
                        width="20px"
                        color="#655DBB"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}
                      />
                    ) : (
                      'Leaderboard'
                    )}
                  </Button>
                </Link>
              </Section>
            </Section>
            <Section className="right-0">
              <FinishQuizPageSvg />
            </Section>
          </Section>
        )}
      </Section>
    </Container>
  );
};

export default SingleQuizPage;
