const QuizQuestions = ({
  questions,
  selectedQuestion,
  handleQuestionSelection,
}: any) => {
  return (
    <div className="flex flex-col items-center mt-4">
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

export default QuizQuestions;
