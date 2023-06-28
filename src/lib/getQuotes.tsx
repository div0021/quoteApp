import axios from "axios";

const getQuotes = async () => {
  const pageNumber = Math.round(Math.random() * 7260);
  const quotes = await axios.get(
    `https://quote-garden.onrender.com/api/v3/quotes?page=${pageNumber}`
  );
  return quotes;
};

export default getQuotes;
