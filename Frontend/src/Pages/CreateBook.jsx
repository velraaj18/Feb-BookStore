import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/spinner";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("/books", data)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.error("An error occurred");
        setLoading(false);
        enqueueSnackbar("An error occurred", { variant: "error" });
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl uppercase text-black text-center">
        Create Book
      </h1>
      <div className="flex flex-col p-4 border-2 border-black w-[600px] mx-auto my-10 items-center">
        <div className="my-4 flex gap-4">
          <label className=" text-xl text-gray-600 uppercase">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-black w-fit"
            placeholder="Title"
          />
        </div>
        <div className=" flex gap-3 my-4">
          <label className=" text-xl text-gray-600 uppercase">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=" w-auto border-2 border-black"
            placeholder="author"
          />
        </div>
        <div className=" flex gap-3 my-4">
          <label className=" text-xl text-gray-600 uppercase">
            publish year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className=" w-auto border-2 border-black"
            placeholder="publish year"
          />
        </div>
        <button
          className=" border-2 border-black w-auto my-4"
          onClick={saveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
