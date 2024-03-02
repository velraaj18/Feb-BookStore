import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination}>
        <IoMdArrowRoundBack className="text-sky-600 text-4xl" />
      </Link>
    </div>
  );
};

export default BackButton;
