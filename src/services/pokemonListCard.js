import { useState, useEffect } from "react";
import axios from "axios";

// fonction pour récupérer tous les pokemon depuis l'API (limite de 649 pokemon)
export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=649"
      );
      setPokemons(data.results);
    }
    fetchData();
  }, []);

  return pokemons;
}
