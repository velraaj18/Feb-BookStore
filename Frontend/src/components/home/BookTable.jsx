import React from "react";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const BookTable = ({ book }) => {
  return (
    <div>
      <table className=" w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className=" border border-slate-500 rounded-md">no</th>
            <th className=" border border-slate-500 rounded-md">Title</th>
            <th className=" border border-slate-500 rounded-md max-md:hidden">
              Author
            </th>
            <th className=" border border-slate-500 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className=" border border-slate-500 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {book.map((books, index) => (
            <tr key={books._id} className=" h-8">
              <td className=" border border-slate-600 rounded-md text-center">
                {index + 1}
              </td>
              <td className=" border border-slate-600 rounded-md text-center">
                {books.title}
              </td>
              <td className=" border border-slate-600 rounded-md text-center max-md:hidden">
                {books.author}
              </td>
              <td className=" border border-slate-600 rounded-md text-center max-md:hidden">
                {books.publishYear}
              </td>
              <td className=" border border-slate-600 rounded-md text-center">
                <div className=" flex justify-center gap-x-3">
                  <Link to={`book/edit/${books._id}`}>
                    <CiEdit className=" text-2xl text-yellow-800" />
                  </Link>
                  <Link to={`book/details/${books._id}`}>
                    <TbListDetails className=" text-2xl text-green-800" />
                  </Link>
                  <Link to={`book/delete/${books._id}`}>
                    <MdDelete className=" text-2xl text-red-800" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
