import React, { useState } from "react";
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
  Pokebola,
} from "./pokemonCardStyle";
import pokebola from "../../assets/pokebola.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../Routes/cordinator";
import pokemonTypes from "../../pokemonTypes";
import { useEffect } from "react";
import { GlobalContext } from "../../Context/globalContext";
import { useContext } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import tema from "../../tema";
export const getBackgroundColor = (types) => {
    if (types.length > 0) {
        if (types[0].type.name === "normal" && types[1]) {
            return tema.colors.backgroundCard[types[1].type.name]
        }
    }
    return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
}
console.log(tema);

export default function PokemonCard({ name, image, id, types }) {
  const navigate = useNavigate();
  const [pokedex, setPokedex] = useState([]);
  const [inPokedex, setInPokedex] = useState(false);
  const { pokedexList, setPokedexList, removePokemon, setPokemonOnHeader } =
    useContext(GlobalContext);
  const location = useLocation();

  const pokemon = {
    id: id,
    name: name,
    image: image,
    types: types,
  };

  useEffect(() => {
    setInPokedex(pokedexList.find((pokemon) => pokemon.id === id));
  });

  // console.log(inPokedex, name);

  const addPokedex = () => {
    setPokedexList([...pokedexList, pokemon]);
  };

  
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="3px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const onCloseModal =()=>{
    onClose()
    if(location.pathname === "/pokedex"){
      removePokemon(id)
    }
  }

  return (
    <>
      <Container>
        <PokemonImage src={image} alt="" />
        <CardBox types={types}>
          <InfoBox>
            <Box>
              <IdPokemon># {id}</IdPokemon>
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
                setPokemonOnHeader(pokemon);
                goToDetail(navigate, id);
              }}
            >
              Detalhes
            </Detalhes>
          </InfoBox>
          <Pokebola src={pokebola} alt="" />
        </CardBox>
        {!inPokedex && (
          <CapturarButton
              onClick={() => {
              addPokedex();
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Capturar
          </CapturarButton>
        )}
        {location.pathname === "/pokedex" && (
          <CapturarButton
            onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
          >
            Excluir
          </CapturarButton>
        )}
      </Container>
      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{"Oh, no!"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* se o location.pathname for igual a / só tem como capturar nao excluir */}
            <Text>{location.pathname === "/"? "O Pokémon foi adicionado a sua Pokédex": "O Pokémon foi removido da sua Pokédex"}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
