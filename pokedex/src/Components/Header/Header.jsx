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
import { Box, Grid } from "@chakra-ui/react";



function Header() {  
  const navigate = useNavigate()
  const location = useLocation()
  const { pokemonOnHeader, pokedexList, removePokemon ,catchPokemon} = useContext(GlobalContext)
  console.log(pokemonOnHeader, "direto do header")
  // console.log(pokemonOnHeader,"linha 23")
  // const params=useParams()
  const [pokemonExiste, setPokemonExiste] = useState(false)
  useEffect(()=>{
    //retorna true ou false
    setPokemonExiste(pokedexList.find((pokemon)=>(pokemon.id === pokemonOnHeader.id)))
  })
  

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
              onClick={() => (removePokemon(pokemonOnHeader.id), goToPokedex(navigate))}
            >
              Excluir da Pokedex
            </ButtonRemovePokemon>
          ) : (
            <ButtonAddPokemon onClick={() => (catchPokemon(pokemonOnHeader),goToPokedex(navigate))}>
              Adicionar Pokedex
            </ButtonAddPokemon>
          ))}

      </Box>
      {/* <Container>
      </Container> */}
    </>
  );
}

export default Header;
