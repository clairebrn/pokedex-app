import React from "react";
// import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import getPokemonList from "../services/pokemonListCard";
import { useState } from "react";
import { useEffect } from "react";
import usePokemons from "../services/pokemonListCard";
import PokemonList from "../components/PokemonList";

function Home(props) {
  const [data, setData] = useState();

  const pokemonsList = usePokemons();
  console.log(pokemonsList);

  return (
    <div>
      <NavBar />
      <h1>Page Home</h1>
      <PokemonList pokemonList={pokemonsList} />
    </div>
  );
}

export default Home;
