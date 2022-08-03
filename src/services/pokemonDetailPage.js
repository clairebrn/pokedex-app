import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonDetail(id) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemonDetails(data);
      console.log("les dataaaa", data);
    }
    fetchData();
  }, []);

  return pokemonDetails;
}
