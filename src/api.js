import axios from "axios";

export const getBookList = async (q) => {
  const book = await axios.get(`${process.env.REACT_APP_BASE_URL}/volumes?q=${q}&key=${process.env.REACT_APP_API_KEY}`);
  return book.data.items;
};
