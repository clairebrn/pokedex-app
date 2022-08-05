import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: null,
};

export const PokemonSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    addAllPokemons: (state, action) => {
      const pokemons = action.payload.pokemons;
      state.allPokemons = pokemons;
    },
  },
});

export const { addAllPokemons } = PokemonSlice.actions;
export default PokemonSlice.reducer;
