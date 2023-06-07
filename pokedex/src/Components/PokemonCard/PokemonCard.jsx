import React from "react";
import {
  Container,
  CardBox,
  InfoBox,
  Box,
  BoxTipo,
  ImageTipo,
  Detalhes,
  PokemonImage,
  CapturarButton,
  IdPokemon,
  NamePokemon,
} from "./pokemonCardStyle";
import pokebola from "../../assets/pokebola.svg";

import { useNavigate } from "react-router-dom";
import { goToDetail } from "../Routes/cordinator";
import pokemonTypes from "../../pokemonTypes";

export default function PokemonCard({ name, image, id, types }) {
  const navigate = useNavigate();
  return (
    <Container>
      <PokemonImage src={image} alt="" />
      <CardBox types={types}>
        <InfoBox>
          <Box>
            <IdPokemon>{id}</IdPokemon>
            <NamePokemon>{name}</NamePokemon>
            <BoxTipo>
              {types.map((type) => (
                <ImageTipo
                  key={type.type.name}
                  src={pokemonTypes[type.type.name]}
                  alt={type.type.name}
                />
              ))}
            </BoxTipo>
          </Box>
          <Detalhes
            onClick={() => {
              goToDetail(navigate);
            }}
          >
            Detalhes
          </Detalhes>
        </InfoBox>
        <img src={pokebola} alt="" />
      </CardBox>

      <CapturarButton>Capturar</CapturarButton>
    </Container>
  );
}
