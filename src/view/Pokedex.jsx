import React from "react";
import style from "../components/Pokedex.module.css";
import { useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import PokemonDetail from "../services/pokemonDetailPage";
import SpeciesDetail from "../services/speciesDetailPage";
import PokemonList from "../components/PokemonList";

function Pokedex(props) {
  // return (
  //   <div className={style.containerFav}>
  //     <NavBar />
  //     <div className={style.flex}>
  //       <div className={style.styleCard}>
  //         <div>
  //           <h1>pokemon.name</h1>
  //         </div>
  //         <div>
  //           <img
  //             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
  //             alt="nom du pokemon"
  //             className={style.imgSize}
  //           />
  //         </div>
  //         <div className={style.containerBtn}>
  //           {/* <Link to={`/pokedex`}> */}
  //           <button className={style.btn}>Supprimer des favoris</button>
  //           {/* </Link> */}
  //         </div>
  //       </div>
  //       <div className={style.styleCard}>
  //         <div>
  //           <h1>pokemon.name</h1>
  //         </div>
  //         <div>
  //           <img
  //             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
  //             alt="nom du pokemon"
  //             className={style.imgSize}
  //           />
  //         </div>
  //         <div className={style.containerBtn}>
  //           {/* <Link to={`/pokedex`}> */}
  //           <button className={style.btn}>Supprimer des favoris</button>
  //           {/* </Link> */}
  //         </div>
  //       </div>
  //       <div className={style.styleCard}>
  //         <div>
  //           <h1>pokemon.name</h1>
  //         </div>
  //         <div>
  //           <img
  //             src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg"
  //             alt="nom du pokemon"
  //             className={style.imgSize}
  //           />
  //         </div>
  //         <div className={style.containerBtn}>
  //           {/* <Link to={`/pokedex`}> */}
  //           <button className={style.btn}>Supprimer des favoris</button>
  //           {/* </Link> */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const { pokemons } = useSelector((state) => state.pokedex);

  return (
    <div>
      <div>
        {/* <input type="text" placeholder="Rechercher un pokemon.."></input> */}
      </div>
      <PokemonList pokemonList={pokemons} />
    </div>
  );
}

export default Pokedex;
