/* eslint-disable no-unused-vars */
import {
  Container,
  Todos,
  BotaoPokedex,
  Logo,
  Menor,
  ButtonRemovePokemon,
} from "./headerStyled";
import logo from "../../assets/LogoPokemon.svg";
import SimboloMenor from "../../assets/Menor.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHome, goToPokedex } from "../Routes/cordinator";
import { useContext } from "react";
import { GlobalContext } from "../../Context/globalContext";


function Header(id) {
  
  const navigate = useNavigate()
  const location = useLocation()
  const { pokemonOnHeader, setPokedexList,pokedexList, removePokemon } = useContext(GlobalContext)
  
  // console.log(pokemonOnHeader,"linha 23")
  const params=useParams()
  // console.log(location.pathname.split('/')[2])
  

  return (
    <>
      <Container>
        {location.pathname !== "/" && (
        <Todos onClick={()=>{goToHome(navigate)}}><Menor src={SimboloMenor} alt="" /> Todos Pokémons</Todos>)}

        <Logo src={logo} alt="" /> 
        {location.pathname === "/" && (
        <BotaoPokedex onClick={()=>{goToPokedex(navigate)}}>
          Pokedex
        </BotaoPokedex>
        )}

        {location.pathname.includes("/detail") && (
        <ButtonRemovePokemon
          onClick={() => (            
            removePokemon(location.pathname.split('/')[2]),goToPokedex(navigate)
          )}
        >
          Excluir da Pokédex
        </ButtonRemovePokemon>
      )}

      </Container>
    </>
  );
}

export default Header;
