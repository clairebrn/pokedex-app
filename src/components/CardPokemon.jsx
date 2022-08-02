import React, { Component } from "react";
import { Card } from "react-bootstrap";
import style from "./Card.module.css";

function CardPokemon({ pokemon }) {
  const img = getImagebyId(pokemon.url);
  // console.log(pokemon);
  return (
    // <div className={style.styleCard}>
    //   <h1>{pokemon.name}</h1>
    //   <img src={img} alt={pokemon.name} />
    // </div>
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
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
