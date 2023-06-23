/* eslint-disable no-unused-vars */
import {
  
  Todos,
  BotaoPokedex,
  Logo,
  Menor,
  ButtonRemovePokemon,
  ButtonAddPokemon,
} from "./headerStyled";
import logo from "../../assets/LogoPokemon.svg";
import SimboloMenor from "../../assets/Menor.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../Routes/cordinator";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/globalContext";
import { Box, Button, Grid, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";



function Header() {  
  const navigate = useNavigate()
  const location = useLocation()
  const { pokemonOnHeader, pokedexList, removePokemon ,catchPokemon} = useContext(GlobalContext)
  console.log(pokemonOnHeader, "direto do header")
  // console.log(pokemonOnHeader,"linha 23")
  // const params=useParams()
  const [pokemonExiste, setPokemonExiste] = useState(false)
  const [selecionado, setSelecionado] = useState('')
  
  useEffect(()=>{
    //retorna true ou false
    setPokemonExiste(pokedexList.find((pokemon)=>(pokemon.id === pokemonOnHeader.id)))
  })

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
    if (pokedexList.find((pokemon)=>pokemon.id === pokemonOnHeader.id) && selecionado === "Remover" ) {
      removePokemon(pokemonOnHeader.id);
    }
    goToPokedex(navigate)
  };
  

  return (
    <>
      <Box
        bg="#ffffff"
        display="grid"
        gridTemplateColumns="repeat(16,1fr)"
        width="100%"
        alignItems="center"
        height="10rem"
      >
        {location.pathname !== "/" && (
        <Todos onClick={()=>{goToHome(navigate)}}> &lt;  Todos Pokémons</Todos>)}

        <Logo src={logo} alt="" /> 
        {location.pathname === "/" && (
        <BotaoPokedex onClick={()=>{goToPokedex(navigate)}}>
          Pokedex
        </BotaoPokedex>
        )}

{location.pathname.includes("detail") &&
          (pokemonExiste ? (
            <ButtonRemovePokemon
              onClick={() => (setSelecionado("Remover"),onOpen())}
            >
              Excluir da Pokedex
            </ButtonRemovePokemon>
          ) : (
            <ButtonAddPokemon onClick={() => (setSelecionado(""), catchPokemon(pokemonOnHeader), onOpen())}>
              Adicionar Pokedex
            </ButtonAddPokemon>
          ))}

      </Box>
      {/* <Container>
      </Container> */}
      <Modal isCentered isOpen={isOpen} onClose={onCloseModal}>
        {overlay}
        <ModalContent>
          <ModalHeader>{selecionado === "Remover"
                ? "Oh, no"
                : "Gotcha"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* se o location.pathname for igual a / só tem como capturar nao excluir */}
            <Text>
              {selecionado !== "Remover"
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

export default Header;
