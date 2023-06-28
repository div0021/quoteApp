import { TfiReload } from "react-icons/tfi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Quotes from "./Quotes";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const AuthorQuotes = () => {
  const { author } = useParams();

  const getAuthorQuotes = async ({ pageParam = 1 }) => {
    const quotes = await axios.get(
      `https://quote-garden.onrender.com/api/v3/quotes?author=${author}&page=${pageParam}`
    );
    return quotes;
  };

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["author", author],
      enabled: author ? true : false,
      queryFn: getAuthorQuotes,
      getNextPageParam: (lastPage) => lastPage.data?.pagination.nextPage,
    });
  return (
    <>
      <div className="bg-white w-full flex flex-col justify-center items-center dark:text-white dark:bg-black">
        <h1 className="font-bold text-4xl w-72 sm:w-[24.5rem]">{author}</h1>
        <div className="flex flex-col justify-center items-center mb-10 px-10 sm:px-0">
          {!isLoading ? (
            data?.pages.map((data) =>
              data.data.data.map((el: { quoteText: string; _id: string }) => (
                <Quotes key={el._id} text={el.quoteText} />
              ))
            )
          ) : (
            <Quotes text="Loading..." />
          )}
        </div>
        {hasNextPage && (
          <div
            className={`space-x-2 flex items-center mt-5 cursor-pointer mb-10 bg-rose-500 px-5 py-3 hover:bg-rose-500/90 rounded-md ${
              isFetchingNextPage ? "pointer-events-none bg-rose-800" : ""
            }`}
            onClick={() => {
              fetchNextPage();
            }}
          >
            <span className="hover:font-semibold">load more</span>
            {
              <TfiReload
                className={`${
                  isFetchingNextPage ? "animate-spin" : ""
                } rotate-180`}
              />
            }
          </div>
        )}
      </div>

      <Link
        to="/"
        className="flex items-center space-x-3 cursor-pointer fixed bottom-10 xl:left-20 lg:left-10 left-3 hover:bg-rose-500 hover:text-white px-5 py-3 rounded-md"
      >
        <BsArrowLeft /> <span>Go back</span>
      </Link>
    </>
  );
};

export default AuthorQuotes;
