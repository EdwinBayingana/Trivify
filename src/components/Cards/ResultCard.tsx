const ResultCard = ({ label, value }) => {
  return (
    <div className="bg-gray-200 p-2 rounded-md text-center border border-[#cfcbff]">
      <p className="text-xs font-semibold text-gray-800">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
};

export default ResultCard;
