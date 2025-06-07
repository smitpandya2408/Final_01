import React from "react";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import Cource from "./components/Cource";
import Cou1 from "./C1/Cou1";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cource" element={<Cou1/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
