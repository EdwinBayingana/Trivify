import React from 'react';

const SingleQuizPageSkeleton = () => {
  return (
    <div className="text-black bg-creamWhite animate-pulse">
      <div className="flex flex-row gap-[50px] ml-[330px] mt-[75px]">
        <div className="flex justify-center items-center h-[250px] bg-gray-300 w-[250px] rounded-[30px]"></div>

        <div className="flex flex-col justify-center mt-4">
          {/* Answer Options Skeleton */}
          <div className="flex gap-3 w-64 h-11 bg-gray-300 rounded-md py-[10px] px-1 mb-2 cursor-not-allowed text-[14px]">
            <div className="bg-gray-400 ml-1 mt-[2px] h-4 w-4 rounded-full"></div>
            Answer Option 1
          </div>

          <div className="flex gap-3 w-64 h-11 bg-gray-300 rounded-md py-[10px] px-1 mb-2 cursor-not-allowed text-[14px]">
            <div className="bg-gray-400 ml-1 mt-[2px] h-4 w-4 rounded-full"></div>
            Answer Option 2
          </div>
          <div className="flex gap-3 w-64 h-11 bg-gray-300 rounded-md py-[10px] px-1 mb-2 cursor-not-allowed text-[14px]">
            <div className="bg-gray-400 ml-1 mt-[2px] h-4 w-4 rounded-full"></div>
            Answer Option 3
          </div>
          <div className="flex gap-3 w-64 h-11 bg-gray-300 rounded-md py-[10px] px-1 mb-2 cursor-not-allowed text-[14px]">
            <div className="bg-gray-400 ml-1 mt-[2px] h-4 w-4 rounded-full"></div>
            Answer Option 4
          </div>

          {/* Total Questions Skeleton */}
          <div className="justify-center mb-4 ml-14 bg-gray-300 w-[150px] h-7 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuizPageSkeleton;
