import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  count: 0,
};

export const PokedexSlice = createSlice({
  name: "Pokedex",
  initialState,
  reducers: {
    addToPokedex: (state, action) => {
      const pokemon = action.payload.pokemon;
      state.count += 1;
      state.pokemons = [...state.pokemons, pokemon];
    },
    removeFromPokedex: (state, action) => {
      const pokemon = action.payload.pokemon;
      state.count -= 1;
      state.pokemons = state.pokemons.filter((pokemonElement) => {
        return pokemonElement.name != pokemon.name;
      });
    },
  },
});

export const { addToPokedex, removeFromPokedex } = PokedexSlice.actions;
export default PokedexSlice.reducer;
