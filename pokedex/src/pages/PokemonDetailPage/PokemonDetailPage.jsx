import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/globalContext";
import pokeballDetailInsideBackground from "../../assets/pokeballDetailInsideBackground.svg";
import { Center, Flex, Progress } from "@chakra-ui/react";
import { Box, Text } from '@chakra-ui/react';
import  rocketchu  from '../../assets/rocketchu.gif'
import { useContext } from "react";

import {
  Base,
  Container,
  Detalhes,
  Gif,
  Info,
  InfoMov,
  LogoPoke, 
  Logos,
  Move,
  Pokebola,
  Pokemon,
  Section,
  Title,
  TypesBox,
} from "./pokemonDetailPageStyled";
import { useEffect } from "react";
import { api } from "../../api";
import { useState } from "react";
import pokemonTypes from "../../pokemonTypes";

function PokemonDetailPage() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const context = useContext(GlobalContext)
  const {removePokemon} = context;


  console.log(params);
  useEffect(() => {
    api
      .get(`/pokemon/${params.id}`)
      .then((res) => {
        setTimeout(()=> {
          setPokemon(res.data)
          setLoading(false)
        }, 2000)
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(pokemon);
  let moveCount = 0;
  let total = 0;
  if (loading) {
    return (
      <>
        <img src={rocketchu} alt="pokebola" />
      </>
    );
  }
  //se ele nao estiver mais carregando, pega
  if(!loading){
    for(const stat of pokemon.stats){
      total += stat.base_stat
    }
  }
  
  return (
    <>
      
      <Detalhes>Detalhes </Detalhes>
      <Container types={pokemon.types}>
        <Pokemon
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="" 
        />
        <Pokebola src={pokeballDetailInsideBackground} alt="" />
        <Section>
          <Logos>
            <LogoPoke>
              <Gif src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} />{" "}
            </LogoPoke>
            <LogoPoke>
              <Gif src={pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default} />{" "}
            </LogoPoke>
          </Logos>
          <Flex flexDir="column" h="100%" w='23vw' bgColor="white" p=".8rem" borderRadius=".6rem">
            <Title>Estatistica Basica</Title>
            {pokemon.stats.map((status) => {
              return (
                <>
                  <span> {status.stat.name.charAt(0).toUpperCase() + status.stat.name.slice(1)} {status.base_stat}</span>                  <Progress
                    bgGradient={'linear(to-r, green.100, red.500)'}
                    // <Box w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' />
                    value={status.base_stat}
                    
                  />
                </>
              );
            })}
            <p>Total: {total}</p>
          </Flex>

          <InfoMov>
            <Info>
              <p># {pokemon.id}</p>
              <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
              <TypesBox>
                  {pokemon.types.map((type) => {
                    return (
                      <img
                        src={pokemonTypes[type.type.name]}
                        key={type.type.name}
                      />
                    );
                  })}
                </TypesBox>
            </Info>
            
            <Move>
            <Title>Movimentos: </Title>             
              {pokemon.moves.map((move) => {
                if (moveCount < 8) {
                  moveCount += 1;
                  return <Box
                  key={move.move.name}
                  position="relative"
                  marginBottom="3px"
                  padding=  ".5rem"                  
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    width: "100%",
                    height: ".4rem",
                    backgroundColor: "white",
                    
                  }}
                >
                  <Text
                    fontSize=".9rem"
                    fontFamily="Montserrat"
                    fontWeight="400"
                    color="black"
                    bg="#ececec"
                    padding="2px"
                    borderRadius=".4rem"                  
                  >
                    {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
                  </Text>
                </Box>
                }
              })}
            </Move>
          </InfoMov>
        </Section>
      </Container>
    </>
  );
}

export default PokemonDetailPage;
