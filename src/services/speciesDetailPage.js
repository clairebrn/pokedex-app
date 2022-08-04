import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SpeciesDetail(id) {
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      setSpeciesDetails(data);
    }
    fetchData();
  }, []);

  return speciesDetails;
}
