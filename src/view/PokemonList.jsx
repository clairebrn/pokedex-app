import React from "react";
import NavBar from "../components/NavBar";
import style from "../components/PokemonDetail.module.css";

import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";

function PokemonList(props) {
  const { id } = useParams();
  const pokemon = PokemonDetail(id);
  const species = SpeciesDetail(id);

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
    <div>
      <div>
        {!pokemon ? (
          <div>404</div>
        ) : (
          <div className={style.body}>
            {/* carte profil du pokemon (nom,img, btn) */}
            <div className={style.sidebar}>
              <div className={style.containerPokemon}>
                <div>
                  <h1>{pokemon.name}</h1>
                </div>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt="nom du pokemon"
                    className={style.imgSize}
                  />
                </div>
                <div>
                  <Link to={`/pokedex`}>
                    <button className={style.btn}>Ajouter</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* descritpion du pokemon */}

            <div className={style.flex}>
              <div className={style.content}>
                <p>{description}</p>
              </div>
              <div className={style.content}>
                <p>
                  {pokemon.types.map((type) => {
                    return <p key={type.type.name}>Type : {type.type.name}</p>;
                  })}
                </p>
                <p>Poids : {pokemon.weight}</p>
                <p>taille : {pokemon.height}</p>
              </div>
              <div className={style.content}>
                <p>
                  {pokemon.abilities.map((ability) => {
                    return (
                      <p key={ability.ability.name}>
                        Capacité : {ability.ability.name}
                      </p>
                    );
                  })}
                </p>
              </div>
            </div>

            <div className={style.content}>
              <p>Caractéristiques : </p>
              {pokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    {stat.stat.name} = {stat.base_stat}{" "}
                  </p>
                );
              })}
            </div>

            {/* fin du body */}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
