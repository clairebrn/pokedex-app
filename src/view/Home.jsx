import React from "react";
// import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import CardPokemon from "../components/CardPokemon";
import getPokemonList from "../services/pokemonListCard";
import { useState, useEffect } from "react";
import usePokemons from "../services/pokemonListCard";
import PokemonList from "../components/PokemonList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(props) {
  const [data, setData] = useState();

  const pokemonsList = usePokemons();
  console.log(pokemonsList);

  return (
    <div>
      <NavBar />
      {/* <Container>
        <Row>
          <Col sm>
            <PokemonList pokemonList={pokemonsList} />
          </Col>
        </Row>
      </Container> */}
      <div>
        <input type="text" placeholder="Rechercher un pokemon.."></input>
      </div>
      <PokemonList pokemonList={pokemonsList} />
    </div>
  );
}

export default Home;
