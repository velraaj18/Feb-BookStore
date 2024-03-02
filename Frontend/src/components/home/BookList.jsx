import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const BookList = ({ book }) => {
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {book.map((items) => (
        <div
          key={items._id}
          className=" border-2 border-gray-500 rounded-lg hover:shadow-xl shadow-black cursor-pointer p-2 relative"
        >
          <h2 className=" absolute top-2 right-2 bg-red-400 text-white rounded-lg p-2 font-bold">
            {items.publishYear}
          </h2>
          <h3 className=" text-gray-600 font-bold  my-4">{items._id}</h3>
          <div className=" flex justify-start items-center gap-2 my-2">
            <FaBook className=" text-2xl text-red-600" />
            <h3 className=" text-2xl uppercase">{items.title}</h3>
          </div>
          <div className=" flex justify-start items-center gap-2">
            <BsPenFill className=" text-2xl text-red-600" />
            <h3 className=" text-2xl uppercase">{items.author}</h3>
          </div>
          <div className=" flex justify-between my-4 ">
            <Link to={`book/edit/${items._id}`}>
              <CiEdit className=" text-2xl text-yellow-800" />
            </Link>
            <Link to={`book/details/${items._id}`}>
              <TbListDetails className=" text-2xl text-green-800" />
            </Link>
            <Link to={`book/delete/${items._id}`}>
              <MdDelete className=" text-2xl text-red-800" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
