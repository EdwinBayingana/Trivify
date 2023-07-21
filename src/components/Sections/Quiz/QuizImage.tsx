'use client';
const QuizImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <img
        src={imageUrl}
        alt="Quiz Image"
        className="w-[250px] h-[250px] rounded-[30px] object-cover"
      />
    </div>
  );
};

export default QuizImage;
