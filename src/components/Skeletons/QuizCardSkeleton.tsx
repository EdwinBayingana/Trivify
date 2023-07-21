'use client';
import React from 'react';

const QuizCardSkeleton = () => {
  return (
    <div className="bg-gray-300 text-gray-300 shadow-lg rounded-lg h-[250px] w-[200px]">
      <div className="animate-pulse">
        <div className="h-[200px] bg-gray-400 rounded-t-md"></div>
        <div className="p-3">
          <div className="h-4 bg-gray-400 rounded w-2/3 mb-2"></div>
          <div className="h-3 bg-gray-400 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default QuizCardSkeleton;
