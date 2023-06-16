import { useParams } from "react-router-dom";
import pokeballDetailInsideBackground from "../../assets/pokeballDetailInsideBackground.svg";
import { Flex, Progress } from "@chakra-ui/react";
import {
  Base,
  Container,
  Detalhes,
  Info,
  InfoMov,
  LogoPokeBack,
  LogoPokeFront,
  Logos,
  Move,
  Pokebola,
  Pokemon,
  Section,
} from "./pokemonDetailPageStyled";
import { useEffect } from "react";
import { api } from "../../api";
import { useState } from "react";

function PokemonDetailPage() {
  const params = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  console.log(params);
  useEffect(() => {
    api
      .get(`/pokemon/${params.id}`)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(pokemon);
  let moveCount = 0;
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <Detalhes>Detalhes </Detalhes>
      <Container>
        <Pokemon
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <Pokebola src={pokeballDetailInsideBackground} alt="" />
        <Section>
          <Logos>
            <LogoPokeFront>
              <img src={pokemon.sprites.front_default} />{" "}
            </LogoPokeFront>
            <LogoPokeBack>
              <img src={pokemon.sprites.back_default} />{" "}
            </LogoPokeBack>
          </Logos>
          <Flex flexDir="column" h="100%" w='23vw' bgColor="white" >
            {pokemon.stats.map((status) => {
              return (
                <>
                  <span>{status.stat.name}</span>
                  <Progress
                    colorScheme={'red'}
                    value={status.base_stat}
                  />
                </>
              );
            })}
          </Flex>

          <InfoMov>
            <Info>
              <p># {pokemon.id}</p>
              <p>{pokemon.name}</p>
            </Info>
            <Move>
              {pokemon.moves.map((move) => {
                if (moveCount < 8) {
                  moveCount += 1;
                  return <p>{move.move.name}</p>;
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
