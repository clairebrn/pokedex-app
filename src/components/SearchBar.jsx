import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPokemons } from "../reducers/pokemonReducer";

import style from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ setSearch }) {
  const dispatch = useDispatch();
  const { allPokemons } = useSelector((state) => state.pokemon);

  function onSearch(e) {
    const searchValue = e.target.value;
    setSearch(searchValue);
  }

  return (
    <div className={style.body}>
      <div className={style.searchBox}>
        <input
          className={style.searchText}
          placeholder="Find a pokemon !"
          onChange={(e) => onSearch(e)}
          type="search"
        />
        <a href="#" className={style.searchBtn}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
