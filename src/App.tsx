import React from 'react';

import HomePage from "./pages/HomePage";
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/Navigation";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/favourites" element={<FavouritesPage />}/>
          </Routes>
      </>
  );
}

export default App;
