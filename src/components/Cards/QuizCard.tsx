import React from 'react';

interface Quiz {
  title: string;
  description: string;
  difficulty: string;
}

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="quiz-card bg-black shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
      <p className="text-gray-600">{quiz.description}</p>
      <p className="text-gray-700 mt-2">Difficulty: {quiz.difficulty}</p>
    </div>
  );
};

export default QuizCard;
