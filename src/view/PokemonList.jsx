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

            <ul>
              <h2>Attacks</h2>
              <li className={style.cardMoves}>
                {pokemon.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      {stat.stat.name} = {stat.base_stat}{" "}
                    </p>
                  );
                })}
              </li>{" "}
              <h2>Type</h2>
              <li className={style.cardMoves}>
                {pokemon.stats.map((types) => {
                  return (
                    <p key={types.stat.name}>
                      {types.stat.name} = {types.effort}{" "}
                    </p>
                  );
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
