import React, { useContext } from "react";
import Home from "../Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Cource from "./components/Cource";
import Cou1 from "./C1/Cou1";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import  { AuthContext } from "./context/AuthProvider"; // ✅ fixed import

function App() {
  const { authUser } = useContext(AuthContext); 
  console.log(authUser);

  return (
  
    <div className="dark:bg-slate-900 dark:text-white">
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cource"
          element={authUser ? <Cou1 /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      <Toaster />
    </div>
  );
}

export default App;
