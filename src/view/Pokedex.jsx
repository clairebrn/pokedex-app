import React from "react";
import style from "../components/Pokedex.module.css";
import { useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";
import PokemonList from "../components/PokemonList";

function Pokedex(props) {
  const { pokemons } = useSelector((state) => state.pokedex);

  return (
    <div>
      <PokemonList pokemonList={pokemons} />
      <Link to={`/`} className={style.link}>
        <h1 className={style.catchEm}>Gotta Catch 'Em All !</h1>
      </Link>
    </div>
  );
}

export default Pokedex;
