import { BiChevronDown } from 'react-icons/bi';
import { CategoriesList } from '../utils/index';

const Categories = () => {
  const categoryItemWidth = 120; // Adjust this value based on your desired width per category item

  const parentDivWidth = CategoriesList.length * categoryItemWidth;

  return (
    <div
      className="flex justify-center bg-[#626262] rounded-[15px]"
      style={{ width: `${parentDivWidth}px` }}
    >
      <ul className="flex flex-wrap list-none gap-[30px] pt-2">
        {CategoriesList.map((category: string, index: number) => (
          <li
            key={index}
            className="flex text-[16px] mb-2 text-[white] py-1 px-2 rounded gap-[3px] cursor-pointer hover:text-black"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
