import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const RemoveBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/books/${id}`)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.error("Error deleting");
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className=" text-3xl uppercase text-center"> Delete book</h1>
      <div className=" border-2 border-black w-[400px] flex flex-col mx-auto p-4 my-6 gap-4 ">
        <h3 className=" text-justify font-bold text-2xl ">
          Are you sure to delete this book?
        </h3>
        <button
          className=" w-20 bg-red-600 text-white rounded-md border-2 border-black p-2"
          onClick={RemoveBook}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
