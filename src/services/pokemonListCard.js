import { useState, useEffect } from "react";
import axios from "axios";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=649"
      );
      setPokemons(data.results);
      // console.log("pokemonListCard.js", data);
    }
    fetchData();
  }, []);

  return pokemons;
}
