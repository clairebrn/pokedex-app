import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPokemons } from "../reducers/pokemonReducer";

function SearchBar({ setSearch }) {
  const dispatch = useDispatch();
  const { allPokemons } = useSelector((state) => state.pokemon);

  function onSearch(e) {
    const searchValue = e.target.value;
    setSearch(searchValue);
  }

  return (
    <div>
      <input
        onChange={(e) => onSearch(e)}
        type="search"
        placeholder="Rechercher un pokemon.."
      ></input>
    </div>
  );
}

export default SearchBar;
