import React from 'react';
import { Image } from '@/components';

interface Quiz {
  title: string;
  imageUrl: string;
  difficulty: string;
}

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <div className="bg-white text-black shadow-lg rounded-lg">
      <div className="">
        <Image
          className="text-gray-600 w-full h-[200px] rounded-t-md object-cover"
          src={quiz.imageUrl}
          alt={`Quiz - ${quiz.title}`}
        />
      </div>
      <div className="p-3">
        <h2 className="text-md font-bold mb-2">{quiz.title}</h2>
        <p className="text-black mt-2 text-[12px]">
          Difficulty: <span className="htext-greyText">{quiz.difficulty}</span>
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
