import React from "react";

import { BsArrowRight } from "react-icons/bs";

interface AuthorCardProps {
  author: string;
  genre: string;
}
const AuthorCard: React.FC<AuthorCardProps> = ({ author, genre }) => {
  return (
    <div>
      {" "}
      <div className="w-[33.5rem] hover:bg-black py-10 px-5 text-[#4f4f4f] cursor-pointer hover:text-white flex justify-between group items-center space-x-10 transition-all duration-500 ease-in-out dark:hover:bg-white dark:text-white dark:hover:text-black">
        <div>
          <p className="text-lg font-bold">{author}</p>
          <p className="text-[#828282] text-xs">{genre}</p>
        </div>
        <BsArrowRight className="text-3xl opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default AuthorCard;
