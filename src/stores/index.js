import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PokedexReducer from "../reducers/pokedexReducer";
import PokemonReducer from "../reducers/pokemonReducer";

const rootReducer = combineReducers({
  pokedex: PokedexReducer,
  pokemon: PokemonReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
