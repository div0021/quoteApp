import { TfiReload } from "react-icons/tfi";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getQuotes from "./lib/getQuotes";
import { useState } from "react";

function App() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,refetchInterval:20000,
  });
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  if (darkMode) {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "white";
  }

  document.body.style.minWidth = "39rem";
  return (
    <>
      <div
        className={`sm:w-[100dvw] xl:flex justify-center min-h-[100dvh] text-black ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="min-h-[100dvh] w-full dark:text-white dark:bg-black max-w-7xl">
          <div className="flex items-center justify-end pr-10 py-10 text-sm">
            <div className="flex items-center space-x-5">
              <div
                className={`text-white  p-1 rounded-full w-12 h-7 relative before:absolute before:h-5 before:top-1 before:w-5 before:rounded-full cursor-pointer before:transition-all before:duration-500 before:ease-in-out ${
                  darkMode
                    ? "before:left-6 before:bg-black bg-white"
                    : "before:left-1 before:bg-white bg-black"
                }`}
                onClick={handleClick}
              ></div>

              <div
                className={`space-x-2 flex items-center cursor-pointer ${
                  isFetching ? "pointer-events-none" : ""
                }`}
                onClick={() => {
                  refetch();
                }}
              >
                <span className="hover:font-semibold w-12">random</span>
                <TfiReload
                  className={`${isFetching ? "animate-spin" : ""} rotate-180`}
                />
              </div>
            </div>
          </div>

          <Outlet
            context={{
              isLoading,
              quoteText: data?.data.data[0].quoteText,
              quoteAuthor: data?.data.data[0].quoteAuthor,
              quoteGenre: data?.data.data[0].quoteGenre,
            }}
          />
        </div>
      </div>
      <footer className="text-[#bdbdbd] text-center text-sm font-bold mb-5">
        Don't Copy built yours!!
      </footer>
    </>
  );
}

export default App;
