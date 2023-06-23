import { useEffect, useState } from "react";
import { api } from "../../api";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { TituloDaPagina, CardContainer } from "./pokemonListPageStyled";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import  rocketchu  from '../../assets/rocketchu.gif'

function PokemonListPage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0)
  const [anterior, setAnterior]= useState(true)
  const [proximo, setProximo]= useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get("/pokemon/", {
      params: {
        limit: 30,
        offset: page*30
      },
    })
    .then((res) => {
      setAnterior(res.data.previous)
      setProximo(res.data.next)
      const results = res.data.results;
      // console.log(results);
      const promise = results.map((result) => api.get(result.url));
      Promise.all(promise).then((responses) => {
        const pokemonData = responses.map((res) => res.data);
        // console.log(pokemonData);
        setTimeout(()=> {
          setPokemons(pokemonData)
          setLoading(false)
        }, 2000)        
      });
    });
  }, [page]);//para monitorar a pagina
  if (loading) {
    return (
      <>
        <img src={rocketchu} alt="pokebola" />
      </>
    );
  }
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
      <Flex marginTop="1rem" marginLeft="3rem" marginRight="3rem" justifyContent="space-between" padding="4px">
        <Button hidden={!anterior}  onClick={()=>setPage(page-1)}>Anterior</Button>
        
        <Button disabled={!proximo} onClick={()=>setPage(page+1)}>Proximo</Button>
      </Flex>
    </>
  );
}

export default PokemonListPage;
