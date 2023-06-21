import React, { useState } from "react";

import pokebola from "../../assets/pokebola.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../Routes/cordinator";
import pokemonTypes from "../../pokemonTypes";
import { useEffect } from "react";
import { GlobalContext } from "../../Context/globalContext";
import { useContext } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
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
const getBackgroundColor = (types) => {
  if (types.length > 0) {
    if (types[0].type.name === "normal" && types[1]) {
      return tema.colors.backgroundCard[types[1].type.name];
    }
  }
  return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
};
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

  const onCloseModal = () => {
    onClose();
    if (location.pathname === "/pokedex") {
      removePokemon(id);
    }
  };

  return (
    <>
      <Flex
        h={"16.438rem"}
        w={"27.5rem"}
        alignItems={"flex-end"}
        position={"relative"}
      >
        <Image
          h="12.063rem"
          w="12.063rem"
          src={image}
          alt=""
          zIndex={1}
          position={"absolute"}
          top={0}
          right={0}
        />
        <Box
          color={"white"}
          position={"relative"}
          h={"13.125rem"}
          w={"27.5rem"}
          backgroundColor={tema.colors.backgroundCard[types[0].type.name]}
          borderRadius={"0.75rem"}
        >
          {/* <DivInfo>  */}
          {/* <Info> */}
          <Text
            fontSize={"1rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"1.563rem"}
            left={"1.438rem"}
          >
            # {id}
          </Text>
          <Text
            fontSize={"2rem"}
            fontFamily={"Inter"}
            position={"absolute"}
            top={"2.5rem"}
            left={"1.438rem"}
          >
            {name}
            </Text>
          <Flex position={"absolute"} left={"1.438rem"} top={"5.563rem"}>
            {types.map((type) => (
              <Image
                key={type.type.name}
                src={pokemonTypes[type.type.name]}
                alt={type.type.name}
              />
            ))}
	        </Flex>
          <Button
            fontWeight={700}
            position={"absolute"}
            left={"1.438rem"}
            bottom={"1.25rem"}
            bgColor={"transparent"}
            color={"white"}
            border={"none"}
            _hover={"none"}
            _active={"none"}
            zIndex={2}
            onClick={() => {
            goToDetail(navigate, id);
            }}
          >
            <u>Detalhes</u>
          </Button>
          <Image
            position={"absolute"}
            top={0}
            right={0}
            src={pokebola}
            alt=""
          />
          {!inPokedex && (
          <Button
            w={"9.125rem"}
            h={"2.375rem"}
            fontWeight={400}
            position={"absolute"}
            right={"1.375rem"}
            bottom={"1.25rem"}
            fontSize={"1rem"}
            fontFamily={"Poppins"}
            onClick={() => {
              addPokedex();
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Capturar
          </Button>
        )}
        {location.pathname === "/pokedex" && (
          <Button
            w={"9.125rem"}
            h={"2.375rem"}
            fontWeight={400}
            position={"absolute"}
            right={"1.375rem"}
            bottom={"1.25rem"}
            fontSize={"1rem"}
            fontFamily={"Poppins"}
            onClick={() => {
              setOverlay(<OverlayTwo />);
              onOpen();
            }}
          >
            Excluir
          </Button>
        )}
        </Box>
      </Flex>

      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{location.pathname === "/"
                ? "Gotcha"
                : "Oh, no"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* se o location.pathname for igual a / só tem como capturar nao excluir */}
            <Text>
              {location.pathname === "/"
                ? "O Pokémon foi adicionado a sua Pokédex"
                : "O Pokémon foi removido da sua Pokédex"}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
