'use client';
import { useState } from 'react';
import { CategoriesList } from '../utils/index';

interface CategoriesProps {
  onCategorySelect: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0); // This 0 is the index of the first category

  const categoryItemWidth = 115;
  const parentDivWidth = CategoriesList.length * categoryItemWidth;

  const handleSelectedCategory = (index: number) => {
    onCategorySelect(index);
    setSelectedCategory(index);
  };

  return (
    <div
      className="flex justify-center bg-[#626262] rounded-[15px]"
      style={{ width: `${parentDivWidth}px` }}
    >
      <ul className="flex flex-wrap list-none gap-[30px] pt-2">
        {CategoriesList.map((category, index) => (
          <li
            key={index}
            className={`flex text-[16px] mb-2 py-1 px-2 rounded gap-[3px] cursor-pointer hover:text-black ${
              selectedCategory === index
                ? 'text-[#222222] bg-white rounded-lg'
                : 'text-[white]'
            }`}
            onClick={() => handleSelectedCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
