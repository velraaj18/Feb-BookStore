import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBook";
import EditBook from "./Pages/EditBook";
import GetBook from "./Pages/BookDetails";
import DeleteBook from "./Pages/DeleteBook";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/create" element={<CreateBook />} />
        <Route path="/book/delete/:id" element={<DeleteBook />} />
        <Route path="/book/edit/:id" element={<EditBook />} />
        <Route path="/book/details/:id" element={<GetBook />} />
      </Routes>
    </>
  );
};

export default App;