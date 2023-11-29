import "./App.css";
import Logo from "./Assets/logo.jpg";
import { useEffect, useState } from "react";
import { getBookList } from "./api";

const App = () => {
  const logoTxt = "book house";
  const copyTxt = "Created by Froxayn";
  const power = "Powered by Google Books API";
  const [Toggler, setToggler] = useState(true);

  useEffect((q = "book") => {
    getBookList(q).then((items) => {
      setBookList(items);
    });
  }, []);

  const [bookList, setBookList] = useState([]);

  const search = (q) => {
    getBookList(q + "%").then((items) => {
      setBookList(items);
      console.log(items);
    });
  };

  const Result = () => {
    return bookList.map((items, i) => {
      return (
        <div className="w-60 h-60 m-3" key={i}>
          <div className=" flex justify-center items-center">
            <div className="">
              <img src={items.volumeInfo.imageLinks.thumbnail} alt="book.jpg" className="w-52 h-52" />
              <h1 className="text-justify">{items.volumeInfo.title}</h1>
              <a href={items.volumeInfo.previewLink} className="font-bold">
                See More..
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <header>
        <div className="flex justify-between bg-color-2">
          <div className="flex justify-center items-center md:ms-3">
            <img src={Logo} alt="" className="m-2 w-14 rounded-full" />
            <h1 className="logoTxt uppercase text-xl text-green-900">{logoTxt}</h1>
          </div>
          <div className="flex justify-center items-center me-5 max-md:hidden">
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-color-3 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-900 focus:ring-green-900 focus:ring-2 sm:text-sm"
                placeholder="Cari Buku..."
                type="text"
                name="search"
                onChange={({ target }) => search(target.value)}
              />
            </label>
          </div>
          <div
            className={Toggler ? "flex justify-center items-center me-5 md:hidden" : "hidden"}
            onClick={() => {
              setToggler(!Toggler);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div
            className={Toggler ? "flex justify-center items-center me-2 md:hidden max-md:hidden" : "flex justify-center items-center me-5 md:hidden "}
            onClick={() => {
              setToggler(!Toggler);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className={Toggler ? "md:hidden max-md:hidden" : "md:hidden"}>
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-color-3 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-900 focus:ring-green-900 focus:ring-2 sm:text-sm"
              placeholder="Cari Buku..."
              type="text"
              name="search"
              onChange={({ target }) => search(target.value)}
            />
          </label>
        </div>
      </header>

      <content>
        <div className="bg-color-1">
          <div className="flex justify-center items-center">
            <div className="m-5 bg-color-4 rounded-xl">
              <h1 className="text-style1 text-center text-6xl max-md:text-4xl capitalize text-green-950 p-3 bg-color-2 rounded-xl">list buku:</h1>
              <div className="mb-5 grid grid-cols-5 max-md:grid-cols-1 ">
                <Result />
              </div>
            </div>
          </div>
        </div>
      </content>

      <footer>
        <div className="text-center bg-color-2 p-3">
          <h1 className="text-style2">{copyTxt}</h1>
          <h2 className="text-sm">{power}</h2>
        </div>
      </footer>
    </div>
  );
};

export default App;
