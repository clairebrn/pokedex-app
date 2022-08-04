import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import style from "../components/PokemonDetail.module.css";
import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";

function PokemonList(props) {
  const { id } = useParams();

  const pokemon = PokemonDetail(id);
  // console.log("yo", pokemon);

  const species = SpeciesDetail(id);
  // console.log(species);

  let description = "";

  if (species) {
    const result = species.flavor_text_entries.find((entry) => {
      if (entry.language.name === "en" && entry.version.name === "omega-ruby")
        return true;
      else return false;
    });

    description = result.flavor_text;
  }

  return (
    <div className={style.pokemonDetailPage}>
      <NavBar />
      <div className={style.container}>
        {!pokemon ? (
          <div>404</div>
        ) : (
          <div>
            <div className={style.nomPokemon}>
              <h1>{pokemon.name}</h1>
            </div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              // src="https://www.pokebip.com/images/2022/199.png"
              alt="nom du pokemon"
              className={style.imgSize}
            />
            <h2>Description</h2>
            <p>{description}</p>
            <p>poids : {pokemon.weight}</p>
            <p>taille : {pokemon.height}</p>
            <p>
              capacité :
              {pokemon.abilities.map((ability) => {
                return <p key={ability.ability.name}>{ability.ability.name}</p>;
              })}
            </p>
            <ul>
              <h2>Caractéristiques</h2>
              <li className={style.cardMoves}>
                {pokemon.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      {stat.stat.name} = {stat.base_stat}{" "}
                    </p>
                  );
                })}
              </li>{" "}
            </ul>
            <ul>
              <h2>Types</h2>
              <li className={style.cardMoves}>
                {pokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
              </li>{" "}
            </ul>
            <div className={style.containerBtn}>
              <Link to={`/pokedex`}>
                <button className={style.btn}>Ajouter</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
