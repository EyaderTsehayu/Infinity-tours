import React, { useCallback, useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import Users from "./user/pages/Users.jsx";
import NewPlace from "./places/pages/NewPlace.jsx";
import UserPlaces from "./places/pages/UserPlaces.jsx";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation.jsx";
import UpdatePlace from "./places/pages/UpdatePlace.jsx";
import Auth from "./user/pages/Auth.jsx";
import { AuthContext } from "./shared/context/auth-context.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} exact />
            <Route path="/:userId/places" element={<UserPlaces />} exact />
            <Route path="/places/new" element={<NewPlace />} exact />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
            <Route path="/auth" element={<Auth />} exact />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
