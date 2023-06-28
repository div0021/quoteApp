import React from "react";

interface QuoteProps {
  text: string;
}
const Quotes: React.FC<QuoteProps> = ({ text }) => {
  return (
    <div className="w-[33rem] sm:w-[40rem] pt-20">
      <div className="pl-[7.5rem] border-l-4  border-[#f7df94]">
        <p className="text-3xl tracking-wide">"{text}"</p>
      </div>
    </div>
  );
};

export default Quotes;
