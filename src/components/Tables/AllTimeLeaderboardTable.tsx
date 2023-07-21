'use client';
import React, { useState } from 'react';
import { leaderboardData } from '@/data/leaderboardData';

const ITEMS_PER_PAGE = 10;

const AllTimeLeaderboardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to get the data for the current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return leaderboardData.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(leaderboardData.length / ITEMS_PER_PAGE);

  return (
    <div className="mx-[150px] text-black mb-[30px]">
      <h2 className="text-xl font-bold mb-4 text-black">Leaderboard 🏆</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: '#edf2f7',
                fontWeight: 'bold',
                padding: '8px',
                textAlign: 'left',
              }}
            >
              Rank
            </th>
            <th
              style={{
                backgroundColor: '#edf2f7',
                fontWeight: 'bold',
                padding: '8px',
                textAlign: 'left',
              }}
            >
              Name
            </th>
            <th
              style={{
                backgroundColor: '#edf2f7',
                fontWeight: 'bold',
                padding: '8px',
                textAlign: 'left',
              }}
            >
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageData().map((entry) => (
            <tr key={entry.rank}>
              <td
                style={{
                  border: '1px solid #e2e8f0',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                {entry.rank}
              </td>
              <td
                style={{
                  border: '1px solid #e2e8f0',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                {entry.name}
              </td>
              <td
                style={{
                  border: '1px solid #e2e8f0',
                  padding: '8px',
                  textAlign: 'left',
                }}
              >
                {entry.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {Array.from({ length: totalPageCount }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`mx-1 px-3 py-1 border ${
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {pageNumber}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default AllTimeLeaderboardTable;

// import React from 'react';
// import { leaderboardData } from '@/data/leaderboardData';

// const AllTimeLeaderboardTable = () => {
//   return (
//     <div className="mx-[150px] text-black mb-[30px]">
//       <h2 className="text-xl font-bold mb-4 text-black">Leaderboard 🏆</h2>
//       <table
//         style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//         }}
//       >
//         <thead>
//           <tr>
//             <th
//               style={{
//                 backgroundColor: '#edf2f7',
//                 fontWeight: 'bold',
//                 border: '1px solid #e2e8f0',
//                 padding: '8px',
//                 textAlign: 'left',
//               }}
//             >
//               Rank
//             </th>
//             <th
//               style={{
//                 backgroundColor: '#edf2f7',
//                 fontWeight: 'bold',
//                 border: '1px solid #e2e8f0',
//                 padding: '8px',
//                 textAlign: 'left',
//               }}
//             >
//               Name
//             </th>
//             <th
//               style={{
//                 backgroundColor: '#edf2f7',
//                 fontWeight: 'bold',
//                 border: '1px solid #e2e8f0',
//                 padding: '8px',
//                 textAlign: 'left',
//               }}
//             >
//               Score
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboardData.map((entry) => (
//             <tr key={entry.rank}>
//               <td
//                 style={{
//                   border: '1px solid #e2e8f0',
//                   padding: '8px',
//                   textAlign: 'left',
//                 }}
//               >
//                 {entry.rank}
//               </td>
//               <td
//                 style={{
//                   border: '1px solid #e2e8f0',
//                   padding: '8px',
//                   textAlign: 'left',
//                 }}
//               >
//                 {entry.name}
//               </td>
//               <td
//                 style={{
//                   border: '1px solid #e2e8f0',
//                   padding: '8px',
//                   textAlign: 'left',
//                 }}
//               >
//                 {entry.score}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllTimeLeaderboardTable;
