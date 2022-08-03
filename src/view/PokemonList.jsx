import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import style from "../components/PokemonDetail.module.css";
import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";

function PokemonList(props) {
  const { id } = useParams();

  const pokemon = PokemonDetail(id);
  console.log("yo", pokemon);

  return (
    <div>
      <NavBar />
      <div className={style.container}>
        {!pokemon ? (
          <div>404</div>
        ) : (
          <div>
            <h1>{pokemon.name}</h1>

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              // src="https://www.pokebip.com/images/2022/199.png"
              alt="nom du pokemon"
              className={style.imgSize}
            />

            <ul>
              <li>Ses statistiques (HP, Attaque, Defense, Vitesse, …)</li>
              <li>Le/les types auxquel il appartient (feu, terre, eau, …)</li>
              <li>Une description</li>
              <li>Une description</li>
              <li>Ses évolutions</li>
              <li>
                {pokemon.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      {stat.stat.name} = {stat.base_stat}{" "}
                    </p>
                  );
                })}
              </li>
            </ul>

            <Link to={`/pokedex`}>
              <button>Ajouter</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
