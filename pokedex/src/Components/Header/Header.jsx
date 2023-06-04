/* eslint-disable no-unused-vars */
import {
  Container,
  Todos,
  BotaoPokedex,
  Logo,
  Menor,
} from "./headerStyled";
import logo from "../../assets/LogoPokemon.svg";
import SimboloMenor from "../../assets/Menor.svg";
import { useState } from "react";

function Header() {
  const [isPokedex, setIsPokedex]=useState(true)
  const handleButtonClick = ()=>{
    setIsPokedex(!isPokedex)
}
  return (
    <>
      <Container>
        <Todos><Menor src={SimboloMenor} alt="" />Todos Pokémons</Todos>
        <Logo src={logo} alt="" />
        <BotaoPokedex onClick={handleButtonClick}>
          <p>{isPokedex?"Pokedex":"Excluir da Pokédex"}</p>
        </BotaoPokedex>
      </Container>
    </>
  );
}

export default Header;
