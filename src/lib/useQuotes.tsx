import { useOutletContext } from "react-router-dom";

export interface HomeQuotesProps {
  isLoading: boolean;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

export function useQuotes() {
  return useOutletContext<HomeQuotesProps>();
}
