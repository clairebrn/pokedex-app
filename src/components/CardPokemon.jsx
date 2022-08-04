import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import usePokemons from "../services/pokemonListCard";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

function CardPokemon({ pokemon }) {
  const img = getImagebyId(pokemon.url);

  const getId = (url) => {
    const splittedUrl = url.split("/");
    const id = splittedUrl[6];
    return id;
  };

  return (
    //affichage des pokemon sur la page Home
    <div className={style.styleCard}>
      <div>
        <h1>{pokemon.name}</h1>
      </div>
      <div>
        <Link to={`/pokemonList/${getId(pokemon.url)}`}>
          <img src={img} alt={pokemon.name} className={style.imgSize} />
        </Link>
      </div>
      <div className={style.containerBtn}>
        <Link to={`/pokedex`}>
          <button className={style.btn}>Ajouter</button>
        </Link>
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
