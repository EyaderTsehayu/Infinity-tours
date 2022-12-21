import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Users from "./user/pages/Users.jsx";
import NewPlace from "./places/pages/NewPlace.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} exact />
      <Route path="/places/new" element={<NewPlace />} exact />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
