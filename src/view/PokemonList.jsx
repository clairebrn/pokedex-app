import React from "react";
import NavBar from "../components/NavBar";
import style from "../components/PokemonDetail.module.css";

import { useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";
import { useSelector, useDispatch } from "react-redux";
import { addToPokedex, removeFromPokedex } from "../reducers/pokedexReducer";

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

  let isSelected;
  const { pokemons } = useSelector((state) => state.pokedex);
  if (pokemon) {
    isSelected = pokemons.find(
      (pokemonElement) => pokemonElement.name === pokemon.name
    );
    console.log(isSelected);
  }
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
    <div>
      <div>
        {!pokemon ? (
          <div>404</div>
        ) : (
          <div className={style.body}>
            {/* carte profil du pokemon (nom,img, btn) */}
            <div className={style.sidebarUn}>
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
                  <button className={style.btn} onClick={onToggleClick}>
                    {isSelected ? "Supprimer" : "Ajouter"}
                  </button>
                </div>
              </div>
            </div>
            {/* description du pokemon */}

            <div className={style.flex}>
              <div className={style.description}>
                <p>{description}</p>
              </div>
              <div className={style.content}>
                <p>
                  {pokemon.types.map((type) => {
                    return (
                      <p key={type.type.name}>
                        <span>Type :</span> {type.type.name}
                      </p>
                    );
                  })}
                </p>
                <p>
                  <span>Weight :</span> {pokemon.weight}
                </p>
                <p>
                  {" "}
                  <span>Height :</span> {pokemon.height}
                </p>
              </div>
              <div className={style.content}>
                <p>
                  {pokemon.abilities.map((ability) => {
                    return (
                      <p key={ability.ability.name}>
                        <span>Capacité :</span>
                        {ability.ability.name}
                      </p>
                    );
                  })}
                </p>
              </div>
            </div>

            <div className={style.content}>
              <p>
                <span>Caractéristiques :</span>{" "}
              </p>
              {pokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    {stat.stat.name} = {stat.base_stat}{" "}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
