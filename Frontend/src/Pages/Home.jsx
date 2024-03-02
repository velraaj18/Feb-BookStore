import React, { useEffect, useState } from "react";

import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import BookTable from "../components/home/BookTable";
import BookList from "../components/home/BookList.jsx";

const Home = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/books")
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className=" flex justify-center items-center gap-x-4">
        <button
          className=" border-2 border-black bg-red-600 text-white rounded-xl px-4"
          onClick={() => setShowType("table")}
        >
          table
        </button>
        <button
          className=" border-2 border-black bg-sky-300 text-white rounded-xl px-4"
          onClick={() => setShowType("List")}
        >
          List
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl my-8">Books List</h1>
        <Link to="/book/create">
          <IoIosAddCircleOutline className=" text-sky-600 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable book={book} />
      ) : (
        <BookList book={book} />
      )}
    </div>
  );
};

export default Home;
