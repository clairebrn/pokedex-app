import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PokedexReducer from "../reducers/pokedexReducer";

console.log(PokedexReducer);
const rootReducer = combineReducers({
  pokedex: PokedexReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

console.log(store);

export default store;
