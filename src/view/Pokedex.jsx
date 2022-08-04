import React from "react";
import NavBar from "../components/NavBar";
import style from "../components/Pokedex.module.css";

import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";

function PokemonList(props) {
  // const { id } = useParams();
  // const pokemon = PokemonDetail(id);
  // const species = SpeciesDetail(id);

  // let description = "";

  // if (species) {
  //   const result = species.flavor_text_entries.find((entry) => {
  //     if (entry.language.name === "en" && entry.version.name === "omega-ruby")
  //       return true;
  //     else return false;
  //   });

  //   description = result.flavor_text;
  // }

  return (
    <div className={style.containerFav}>
      <NavBar />
      <div className={style.flex}>
        <div className={style.styleCard}>
          <div>
            <h1>pokemon.name</h1>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
              alt="nom du pokemon"
              className={style.imgSize}
            />
          </div>
          <div className={style.containerBtn}>
            {/* <Link to={`/pokedex`}> */}
            <button className={style.btn}>Supprimer des favoris</button>
            {/* </Link> */}
          </div>
        </div>
        <div className={style.styleCard}>
          <div>
            <h1>pokemon.name</h1>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
              alt="nom du pokemon"
              className={style.imgSize}
            />
          </div>
          <div className={style.containerBtn}>
            {/* <Link to={`/pokedex`}> */}
            <button className={style.btn}>Supprimer des favoris</button>
            {/* </Link> */}
          </div>
        </div>
        <div className={style.styleCard}>
          <div>
            <h1>pokemon.name</h1>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
              alt="nom du pokemon"
              className={style.imgSize}
            />
          </div>
          <div className={style.containerBtn}>
            {/* <Link to={`/pokedex`}> */}
            <button className={style.btn}>Supprimer des favoris</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
