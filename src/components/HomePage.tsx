import { useQuotes } from "../lib/useQuotes";
import AuthorCard from "./AuthorCard";
import Quotes from "./Quotes";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { isLoading, quoteAuthor, quoteGenre, quoteText } = useQuotes();
  return (
    <div className="bg-white dark:bg-black dark:text-white w-full flex flex-col justify-center items-center space-y-16 mb-10 px-10 sm:px-0">
      <Quotes text={isLoading ? "Loading ..." : quoteText} />
      {/* // black card */}
      <Link to={`${quoteAuthor}`} className="w-[40rem] flex justify-end">
        <AuthorCard
          author={!isLoading ? quoteAuthor : "loading ..."}
          genre={isLoading ? "" : quoteGenre}
        />
      </Link>
    </div>
  );
};

export default HomePage;
