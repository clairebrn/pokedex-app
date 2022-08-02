import React from "react";
import Card from "./Card";

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList && pokemonList.map((pokemon) => <Card pokemon={pokemon} />)}
    </div>
  );
};

export default PokemonList;
