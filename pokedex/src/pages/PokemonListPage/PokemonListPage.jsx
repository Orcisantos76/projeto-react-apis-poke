import { useEffect, useState } from "react";
import { api } from "../../api";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { TituloDaPagina, CardContainer } from "./pokemonListPageStyled";

function PokemonListPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("/pokemon").then((res) => {
      const results = res.data.results;
      // console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        // console.log(pokemonData);
        setPokemons(pokemonData);
      });
    });
  }, []);
  
  return (
    <>
      <TituloDaPagina>Todos Pokémons</TituloDaPagina>
      <CardContainer>
        {pokemons.map((pokemon) => (
          
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            types={pokemon.types}
          ></PokemonCard>
        ))}
      </CardContainer>
    </>
  );
}

export default PokemonListPage;
