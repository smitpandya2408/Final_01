import React from "react";
import Navbar from "../components/Navbar";
import Cource from "../components/Cource";
import Fotter from "../components/Fotter";

function Cou1() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Cource />
      </div>
      <Fotter />
    </>
  );
}

export default Cou1;
