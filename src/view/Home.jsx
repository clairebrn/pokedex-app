import React from "react";
import NavBar from "../components/NavBar";
import CardPokemon from "../components/CardPokemon";
import getPokemonList from "../services/pokemonListCard";
import { useState, useEffect } from "react";
import usePokemons from "../services/pokemonListCard";
import PokemonList from "../components/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { addAllPokemons } from "../reducers/pokemonReducer";
import SearchBar from "../components/SearchBar";

function Home() {
  const [search, setSearch] = useState(null);

  const dispatch = useDispatch();
  const { allPokemons } = useSelector((state) => state.pokemon);

  const pokemons = usePokemons();

  if (pokemons) {
    dispatch(addAllPokemons({ pokemons: pokemons }));
  }

  let pokemonResult = [];
  if (search) {
    pokemonResult = allPokemons.filter((pokemon) => {
      return pokemon.name.includes(search);
    });
    // console.log(search);
  }

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <PokemonList pokemonList={search ? pokemonResult : allPokemons} />
    </div>
  );
}

export default Home;
