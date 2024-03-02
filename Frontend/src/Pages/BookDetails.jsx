import React, { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const GetBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    //Only for fetchingdata useEffect
    setLoading(true);
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl text-black uppercase m-5 text-center">
        Book Details
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border border-black w-[600px] m-5 text-justify mx-auto">
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">id :</span>
            <span>{book._id}</span>
          </div>
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">title :</span>
            <span>{book.title}</span>
          </div>
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">author :</span>
            <span>{book.author}</span>
          </div>
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">publish Year :</span>
            <span>{book.publishYear}</span>
          </div>
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">created at:</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className=" my-5">
            <span className=" text-xl mr-4 uppercase">updated at:</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetBook;
