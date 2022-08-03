import React from "react";
import Home from "./view/Home";
import Pokedex from "./view/Pokedex";
import PokemonList from "./view/PokemonList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-quicksand";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/PokemonList/:id" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
