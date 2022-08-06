import React, { Component } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addToPokedex, removeFromPokedex } from "../reducers/pokedexReducer";
import { useDispatch, useSelector } from "react-redux";

function CardPokemon({ pokemon }) {
  const { pokemons } = useSelector((state) => state.pokedex);
  const isSelected = pokemons.find(
    (pokemonElement) => pokemonElement.name === pokemon.name
  );

  const img = getImagebyId(pokemon.url);

  const getId = (url) => {
    const splittedUrl = url.split("/");
    const id = splittedUrl[6];
    return id;
  };

  const dispatch = useDispatch();

  const onToggleClick = () => {
    const payload = { pokemon: pokemon };
    if (isSelected) {
      dispatch(removeFromPokedex(payload));
    } else {
      dispatch(addToPokedex(payload));
    }
  };

  return (
    <div className={style.allcontainer}>
      <div className={style.styleCard}>
        <div>
          <h1>{pokemon.name}</h1>
        </div>
        <Link to={`/pokemonList/${getId(pokemon.url)}`}>
          <div>
            <img src={img} alt={pokemon.name} className={style.imgSize} />
          </div>
        </Link>
        <div className={style.containerBtn}>
          <button className={style.btn} onClick={onToggleClick}>
            {isSelected ? "Supprimer" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPokemon;

// fonction pour spliter l'url et récupérer l'id des images de chaque pokemon
function getImagebyId(url) {
  const splittedUrl = url.split("/");
  const id = splittedUrl[6];
  const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  return urlImg;
}
