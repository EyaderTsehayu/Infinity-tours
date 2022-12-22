import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Users from "./user/pages/Users.jsx";
import NewPlace from "./places/pages/NewPlace.jsx";

import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation.jsx";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
