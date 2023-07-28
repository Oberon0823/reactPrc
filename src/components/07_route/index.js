import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import About from "./About";
import PageError404 from "./PageError404";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Homepage />}></Route>
          <Route path="" element={<About />}></Route>
          <Route path="" element={<PageError404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
