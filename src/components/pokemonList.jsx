import React from "react";
import CardPokemon from "./CardPokemon";

// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
import style from "./PokemonList.module.css";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className={style.hello}>
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonList;
