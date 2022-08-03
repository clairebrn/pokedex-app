import React, { Component } from "react";
import { Card } from "react-bootstrap";
import usePokemons from "../services/pokemonListCard";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

function CardPokemon({ pokemon }) {
  const img = getImagebyId(pokemon.url);
  // console.log(pokemon);

  const getId = (url) => {
    const splittedUrl = url.split("/");
    console.log(splittedUrl);
    const id = splittedUrl[6];
    return id;
  };

  return (
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
    // <div className="styleCard">
    //   <Card>
    //     {/* <Card> */}
    //     <Card.Img src={img} />
    //     <Card.Header as="h2">{pokemon.name}</Card.Header>
    //   </Card>
    // </div>
  );
}

export default CardPokemon;

function getImagebyId(url) {
  const splittedUrl = url.split("/");
  console.log(splittedUrl);

  const id = splittedUrl[6];
  const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return urlImg;
}
