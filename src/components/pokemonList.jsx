import React from "react";
import CardPokemon from "./CardPokemon";

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemon) => <CardPokemon pokemon={pokemon} />)}
    </div>
  );
};

export default PokemonList;
