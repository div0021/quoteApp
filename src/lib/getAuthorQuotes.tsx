import axios from "axios";

const getAuthorQuotes = async ({
  authorName,
  pageParams = 1,
}: {
  authorName: string;
  pageParams?: number;
}) => {
  const quotes = await axios.get(
    `https://quote-garden.onrender.com/api/v3/quotes?author=${authorName}&page=${pageParams}`
  );
  return quotes;
};

export default getAuthorQuotes;
