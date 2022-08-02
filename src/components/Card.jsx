import React, { Component } from "react";
import style from "./Card.module.css";

function Card({ pokemon }) {
  const img = getImagebyId(pokemon.url);
  // console.log(pokemon);
  return (
    <div className={style.styleCard}>
      <h1>{pokemon.name}</h1>
      <img src={img} alt={pokemon.name} />
      <div>
        <button>Ajouter</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
}

export default Card;

function getImagebyId(url) {
  const splittedUrl = url.split("/");
  console.log(splittedUrl);

  const id = splittedUrl[6];
  const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return urlImg;
}
