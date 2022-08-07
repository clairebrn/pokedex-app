import React from "react";
import CardPokemon from "./CardPokemon";
import style from "./PokemonList.module.css";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className={style.pokemonCardStyleBase}>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonList;
