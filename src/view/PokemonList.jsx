import React from "react";
import NavBar from "../components/NavBar";
import style from "../components/PokemonDetail.module.css";

import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";

function PokemonListNew(props) {
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
      <NavBar />

      <div>
        {!pokemon ? (
          <div>404</div>
        ) : (
          <div className={style.body}>
            {/* ouverture de div */}
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
            {/* fermeture div */}
            <div className={style.content}>
              <p>bloc detail numéro un</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonListNew;
